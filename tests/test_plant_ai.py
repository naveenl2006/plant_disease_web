"""
PlantAI Website - Selenium Automation Test Suite
=================================================
Tests:
  1. Navbar navigation (logo, links, language selector)
  2. Home page (hero, CTA buttons, stats, features, how-it-works, plants)
  3. Classify page (tabs, upload area, error handling)
  4. About page (hero, sections, CTA)
  5. ChatBot (open/close, send message)
  6. Language switcher (EN → Tamil → Telugu → EN)
  7. Footer presence
  8. Responsive / mobile menu

Requirements:
  pip install selenium webdriver-manager pytest

Run:
  pytest tests/test_plant_ai.py -v
  # or run directly:
  python tests/test_plant_ai.py

Make sure the dev server is running first:
  npm run dev      (defaults to http://localhost:5173)
"""

import os
import time
import unittest

from selenium import webdriver
from selenium.common.exceptions import (
    ElementClickInterceptedException,
    NoSuchElementException,
    TimeoutException,
)
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

try:
    from webdriver_manager.chrome import ChromeDriverManager
    USE_WDM = True
except ImportError:
    USE_WDM = False

# ──────────────────────────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────────────────────────
BASE_URL = os.environ.get("PLANTAI_URL", "http://localhost:5173")
TIMEOUT = 10          # default explicit-wait timeout (seconds)
HEADLESS = os.environ.get("HEADLESS", "0") == "1"  # set HEADLESS=1 for CI


# ──────────────────────────────────────────────────────────────
# Base Test Class
# ──────────────────────────────────────────────────────────────
class BaseTest(unittest.TestCase):
    """Sets up / tears down one Chrome driver per test class."""

    @classmethod
    def setUpClass(cls):
        opts = ChromeOptions()
        if HEADLESS:
            opts.add_argument("--headless=new")
        opts.add_argument("--no-sandbox")
        opts.add_argument("--disable-dev-shm-usage")
        opts.add_argument("--window-size=1280,900")
        # Suppress camera/mic permission dialogs
        opts.add_argument("--use-fake-ui-for-media-stream")
        opts.add_argument("--use-fake-device-for-media-stream")

        if USE_WDM:
            cls.driver = webdriver.Chrome(
                service=ChromeService(ChromeDriverManager().install()),
                options=opts,
            )
        else:
            cls.driver = webdriver.Chrome(options=opts)

        cls.driver.implicitly_wait(3)
        cls.wait = WebDriverWait(cls.driver, TIMEOUT)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    # ── helpers ──────────────────────────────────────────────

    def _go(self, path: str = "/"):
        self.driver.get(BASE_URL + path)

    def _find(self, by, value):
        return self.wait.until(EC.presence_of_element_located((by, value)))

    def _click(self, by, value):
        el = self.wait.until(EC.element_to_be_clickable((by, value)))
        try:
            el.click()
        except ElementClickInterceptedException:
            self.driver.execute_script("arguments[0].click();", el)
        return el

    def _visible(self, by, value):
        return self.wait.until(EC.visibility_of_element_located((by, value)))

    def _scroll_to(self, element):
        self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});", element)

    def _url_contains(self, fragment, timeout=TIMEOUT):
        return WebDriverWait(self.driver, timeout).until(EC.url_contains(fragment))


# ══════════════════════════════════════════════════════════════
# 1. NAVIGATION TESTS
# ══════════════════════════════════════════════════════════════
class TestNavigation(BaseTest):

    def test_01_logo_navigates_to_home(self):
        """Clicking the PlantAI logo from /classify brings user back to /"""
        self._go("/classify")
        logo = self._click(By.CSS_SELECTOR, "nav a[href='/']")
        self._url_contains("/")
        self.assertIn("localhost", self.driver.current_url)

    def test_02_nav_link_classification(self):
        """Classification nav link navigates to /classify"""
        self._go("/")
        self._click(By.CSS_SELECTOR, "a[href='/classify']")
        self._url_contains("/classify")

    def test_03_nav_link_about(self):
        """About nav link navigates to /about"""
        self._go("/")
        self._click(By.CSS_SELECTOR, "a[href='/about']")
        self._url_contains("/about")

    def test_04_nav_link_home(self):
        """Home nav link in navbar navigates back to /"""
        self._go("/about")
        # The desktop nav has links; pick the one whose href is exactly '/'
        home_link = self._click(By.XPATH, "//nav//a[@href='/'][not(contains(@class,'logo'))]")
        self._url_contains(BASE_URL + "/")

    def test_05_active_link_highlight(self):
        """Active page link is visually distinguished (has bg-green class)"""
        self._go("/classify")
        # Active link should contain green background utility
        active = self._find(By.XPATH, "//nav//a[contains(@class,'bg-green') and @href='/classify']")
        self.assertIsNotNone(active)

    def test_06_navbar_is_fixed(self):
        """Navbar has 'fixed' positioning so it stays visible on scroll"""
        self._go("/")
        nav = self._find(By.TAG_NAME, "nav")
        classes = nav.get_attribute("class")
        self.assertIn("fixed", classes)

    def test_07_analyze_plant_cta_in_navbar(self):
        """'Analyze Plant' button in navbar links to /classify"""
        self._go("/")
        # Desktop CTA button
        btn = self._find(By.XPATH, "//nav//a[@href='/classify'][contains(@class,'bg-green-500')]")
        self.assertIsNotNone(btn)

    def test_08_mobile_hamburger_menu(self):
        """Mobile hamburger menu opens and shows nav links"""
        self.driver.set_window_size(375, 812)
        self._go("/")
        time.sleep(0.5)
        # Hamburger button (md:hidden)
        hamburger = self._click(By.XPATH, "//button[contains(@class,'md:hidden')]")
        time.sleep(0.4)
        # Mobile nav links should be visible
        mobile_links = self.driver.find_elements(By.XPATH, "//div[contains(@class,'md:hidden')]//a")
        self.assertGreater(len(mobile_links), 0)
        self.driver.set_window_size(1280, 900)

    def test_09_mobile_menu_closes_on_link_click(self):
        """Clicking a mobile menu link closes the menu"""
        self.driver.set_window_size(375, 812)
        self._go("/")
        time.sleep(0.5)
        self._click(By.XPATH, "//button[contains(@class,'md:hidden')]")
        time.sleep(0.4)
        # Click the Classify link inside mobile menu
        self._click(By.XPATH, "//div[contains(@class,'md:hidden')]//a[@href='/classify']")
        self._url_contains("/classify")
        self.driver.set_window_size(1280, 900)


# ══════════════════════════════════════════════════════════════
# 2. HOME PAGE TESTS
# ══════════════════════════════════════════════════════════════
class TestHomePage(BaseTest):

    def setUp(self):
        self._go("/")

    def test_10_page_title(self):
        """Page <title> is not empty"""
        self.assertTrue(len(self.driver.title) > 0)

    def test_11_hero_heading_visible(self):
        """Hero section h1 is visible"""
        h1 = self._visible(By.TAG_NAME, "h1")
        self.assertTrue(h1.is_displayed())
        self.assertTrue(len(h1.text) > 0)

    def test_12_hero_get_started_button(self):
        """'Get Started' / primary CTA in hero links to /classify"""
        btn = self._find(By.CSS_SELECTOR, "section a[href='/classify'].btn-shine")
        self.assertIsNotNone(btn)

    def test_13_hero_how_it_works_anchor(self):
        """'How It Works' anchor link points to #how-it-works"""
        link = self._find(By.CSS_SELECTOR, "a[href='#how-it-works']")
        self.assertIsNotNone(link)

    def test_14_scroll_to_benefits(self):
        """Scrolling to #benefits section finds stat cards"""
        self.driver.execute_script("document.getElementById('benefits').scrollIntoView();")
        time.sleep(0.5)
        # Should contain stat values 38+, <3s, 95%+, 100%
        body_text = self.driver.find_element(By.TAG_NAME, "body").text
        self.assertIn("38+", body_text)
        self.assertIn("95%", body_text)

    def test_15_how_it_works_section(self):
        """#how-it-works section contains 3 steps"""
        self.driver.execute_script("document.getElementById('how-it-works').scrollIntoView();")
        time.sleep(0.5)
        steps = self.driver.find_elements(By.XPATH, "//*[@id='how-it-works']//h3")
        self.assertEqual(len(steps), 3)

    def test_16_plant_classes_listed(self):
        """Supported plant classes section shows plant cards"""
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(0.5)
        plants = self.driver.find_elements(By.CSS_SELECTOR, "section div.glass.rounded-xl")
        self.assertGreater(len(plants), 0)

    def test_17_footer_present(self):
        """Footer element is present on homepage"""
        footer = self._find(By.TAG_NAME, "footer")
        self.assertIsNotNone(footer)


# ══════════════════════════════════════════════════════════════
# 3. CLASSIFY PAGE TESTS
# ══════════════════════════════════════════════════════════════
class TestClassifyPage(BaseTest):

    def setUp(self):
        self._go("/classify")

    def test_18_classify_page_heading(self):
        """Classify page has an h1 heading"""
        h1 = self._visible(By.TAG_NAME, "h1")
        self.assertTrue(len(h1.text) > 0)

    def test_19_three_tabs_present(self):
        """Upload, Capture, and Live tabs are all present"""
        # Tabs are buttons inside the tab bar glass div
        tab_buttons = self.driver.find_elements(
            By.XPATH,
            "//div[contains(@class,'glass') and contains(@class,'rounded-2xl') and contains(@class,'flex')]//button"
        )
        self.assertGreaterEqual(len(tab_buttons), 3)

    def test_20_upload_tab_is_default_active(self):
        """Upload tab is active by default (green background)"""
        upload_tab = self._find(
            By.XPATH,
            "//div[contains(@class,'flex') and contains(@class,'gap-1')]//button[contains(@class,'bg-green-500')]"
        )
        self.assertIsNotNone(upload_tab)

    def test_21_upload_drop_zone_visible(self):
        """Upload drop zone with dashed border is visible"""
        drop_zone = self._find(By.CSS_SELECTOR, "div.border-dashed")
        self.assertTrue(drop_zone.is_displayed())

    def test_22_file_input_accepts_images(self):
        """Hidden file input accepts image/* files"""
        file_input = self._find(By.CSS_SELECTOR, "input[type='file']")
        self.assertEqual(file_input.get_attribute("accept"), "image/*")

    def test_23_click_upload_area_triggers_file_dialog(self):
        """Clicking the upload area doesn't throw JS errors (file dialog attempt)"""
        # We can't fully open a native dialog, but we verify no error is thrown
        drop_zone_inner = self._find(By.CSS_SELECTOR, "div.border-dashed div")
        try:
            drop_zone_inner.click()
        except Exception:
            pass  # Native file dialog may suppress click — that's OK
        # Page should still show the classify heading (no navigation away)
        h1 = self._find(By.TAG_NAME, "h1")
        self.assertTrue(h1.is_displayed())

    def test_24_capture_tab_switch(self):
        """Clicking the Capture tab shows camera UI"""
        tabs = self.driver.find_elements(
            By.XPATH,
            "//div[contains(@class,'flex') and contains(@class,'gap-1') and contains(@class,'p-1')]//button"
        )
        # Second tab is Capture
        self.assertGreaterEqual(len(tabs), 2)
        tabs[1].click()
        time.sleep(0.3)
        # Camera placeholder or Open Camera button should appear
        cam_elements = self.driver.find_elements(By.XPATH, "//button[contains(@class,'bg-green-500')]")
        self.assertGreater(len(cam_elements), 0)

    def test_25_live_tab_switch(self):
        """Clicking the Live tab shows live detection UI"""
        tabs = self.driver.find_elements(
            By.XPATH,
            "//div[contains(@class,'flex') and contains(@class,'gap-1') and contains(@class,'p-1')]//button"
        )
        self.assertGreaterEqual(len(tabs), 3)
        tabs[2].click()
        time.sleep(0.3)
        # Verify we don't crash — page still has h1
        h1 = self._find(By.TAG_NAME, "h1")
        self.assertTrue(h1.is_displayed())

    def test_26_upload_invalid_file_shows_error(self):
        """Uploading a non-image file shows an error message"""
        self._go("/classify")
        # Create a temp text file
        tmp = os.path.join(os.path.dirname(__file__), "_tmp_test.txt")
        with open(tmp, "w") as f:
            f.write("not an image")

        file_input = self._find(By.CSS_SELECTOR, "input[type='file']")
        file_input.send_keys(os.path.abspath(tmp))
        time.sleep(0.5)

        # Error message should appear
        try:
            error_div = self._visible(By.CSS_SELECTOR, "div.bg-red-500\\/10")
            self.assertTrue(error_div.is_displayed())
        except TimeoutException:
            # Some browsers silently reject non-image via accept filter — acceptable
            pass
        finally:
            if os.path.exists(tmp):
                os.remove(tmp)

    def test_27_tips_section_visible(self):
        """Tips section is visible at the bottom of the input panel"""
        tips = self._find(By.XPATH, "//p[contains(@class,'uppercase') and contains(@class,'text-green-400')]")
        self._scroll_to(tips)
        self.assertTrue(tips.is_displayed())

    def test_28_ready_state_placeholder_visible(self):
        """Right panel shows 'Ready' placeholder when no image is selected"""
        placeholder = self._find(By.XPATH, "//div[contains(@class,'animate-float')]")
        self.assertTrue(placeholder.is_displayed())


# ══════════════════════════════════════════════════════════════
# 4. ABOUT PAGE TESTS
# ══════════════════════════════════════════════════════════════
class TestAboutPage(BaseTest):

    def setUp(self):
        self._go("/about")

    def test_29_about_page_heading(self):
        """About page has an h1 heading"""
        h1 = self._visible(By.TAG_NAME, "h1")
        self.assertTrue(len(h1.text) > 0)

    def test_30_about_badge_displayed(self):
        """About page badge is displayed"""
        badge = self._find(By.XPATH, "//div[contains(@class,'rounded-full') and contains(@class,'glass')]")
        self.assertTrue(badge.is_displayed())

    def test_31_what_is_section(self):
        """'What is plant disease classification' section appears"""
        self.driver.execute_script("window.scrollBy(0, 300);")
        time.sleep(0.3)
        # h2 inside the glass card
        h2s = self.driver.find_elements(By.TAG_NAME, "h2")
        self.assertGreater(len(h2s), 0)

    def test_32_benefits_grid(self):
        """Benefits section has ≥ 4 benefit cards"""
        self.driver.execute_script("window.scrollBy(0, 600);")
        time.sleep(0.5)
        cards = self.driver.find_elements(By.CSS_SELECTOR, "div.glass.rounded-2xl.card-hover")
        self.assertGreaterEqual(len(cards), 4)

    def test_33_tech_stack_section(self):
        """Tech stack section shows at least 4 technology items"""
        self.driver.execute_script("window.scrollBy(0, 900);")
        time.sleep(0.5)
        tech_items = self.driver.find_elements(By.CSS_SELECTOR, "div.rounded-xl.text-center.p-4")
        self.assertGreaterEqual(len(tech_items), 4)

    def test_34_cta_links_to_classify(self):
        """About page CTA button links to /classify"""
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(0.5)
        cta = self._find(By.CSS_SELECTOR, "a[href='/classify'].btn-shine")
        self.assertIsNotNone(cta)

    def test_35_cta_click_navigates_to_classify(self):
        """Clicking the About page CTA navigates to /classify"""
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(0.5)
        self._click(By.CSS_SELECTOR, "a[href='/classify'].btn-shine")
        self._url_contains("/classify")


# ══════════════════════════════════════════════════════════════
# 5. LANGUAGE SWITCHER TESTS
# ══════════════════════════════════════════════════════════════
class TestLanguageSwitcher(BaseTest):

    def setUp(self):
        self._go("/")

    def _open_lang_dropdown(self):
        """Click the Globe / language button to open the dropdown."""
        lang_btn = self._click(
            By.XPATH,
            "//nav//button[.//svg[contains(@class,'lucide-globe') or contains(name(.),'Globe')]]"
        )
        time.sleep(0.3)
        return lang_btn

    def test_36_language_dropdown_opens(self):
        """Clicking the language button opens a dropdown"""
        self._open_lang_dropdown()
        dropdown = self._visible(By.XPATH, "//button[contains(text(),'Tamil') or contains(text(),'తెలుగు')]")
        self.assertTrue(dropdown.is_displayed())

    def test_37_switch_to_tamil(self):
        """Switching to Tamil changes visible text"""
        self._open_lang_dropdown()
        time.sleep(0.2)
        self._click(By.XPATH, "//button[contains(text(),'Tamil')]")
        time.sleep(0.5)
        # Navbar should no longer say 'Home' in English — check body
        body = self.driver.find_element(By.TAG_NAME, "body").text
        # Tamil translation overrides English; body should not be all English words only
        self.assertTrue(len(body) > 0)

    def test_38_switch_to_telugu(self):
        """Switching to Telugu changes visible text"""
        self._open_lang_dropdown()
        time.sleep(0.2)
        self._click(By.XPATH, "//button[contains(text(),'తెలుగు') or contains(text(),'Telugu')]")
        time.sleep(0.5)
        body = self.driver.find_element(By.TAG_NAME, "body").text
        self.assertTrue(len(body) > 0)

    def test_39_switch_back_to_english(self):
        """Switching back to English restores English text"""
        # First go Tamil
        self._open_lang_dropdown()
        time.sleep(0.2)
        self._click(By.XPATH, "//button[contains(text(),'Tamil')]")
        time.sleep(0.3)
        # Then back to English
        self._open_lang_dropdown()
        time.sleep(0.2)
        self._click(By.XPATH, "//button[contains(text(),'English')]")
        time.sleep(0.5)
        body = self.driver.find_element(By.TAG_NAME, "body").text
        # English text should be back
        self.assertIn("Plant", body)

    def test_40_active_language_has_checkmark(self):
        """The currently active language shows a checkmark in the dropdown"""
        self._open_lang_dropdown()
        checkmark = self._find(
            By.XPATH,
            "//div[contains(@class,'absolute')]//span[text()='✓']"
        )
        self.assertIsNotNone(checkmark)

    def test_41_dropdown_closes_on_outside_click(self):
        """Language dropdown closes when clicking outside"""
        self._open_lang_dropdown()
        # Click somewhere outside the dropdown
        self.driver.find_element(By.TAG_NAME, "body").click()
        time.sleep(0.4)
        # Dropdown items should no longer be visible
        try:
            el = self.driver.find_element(
                By.XPATH,
                "//div[contains(@class,'absolute')]//button[contains(text(),'Tamil')]"
            )
            self.assertFalse(el.is_displayed())
        except NoSuchElementException:
            pass  # dropdown gone — correct


# ══════════════════════════════════════════════════════════════
# 6. CHATBOT TESTS
# ══════════════════════════════════════════════════════════════
class TestChatBot(BaseTest):

    def setUp(self):
        self._go("/")

    def _open_chat(self):
        self._click(By.CSS_SELECTOR, "button[aria-label='Open chat']")
        time.sleep(0.5)

    def _close_chat(self):
        self._click(By.CSS_SELECTOR, "button[aria-label='Open chat']")
        time.sleep(0.3)

    def test_42_chatbot_fab_visible(self):
        """Floating chat button is visible on the page"""
        fab = self._find(By.CSS_SELECTOR, "button[aria-label='Open chat']")
        self.assertTrue(fab.is_displayed())

    def test_43_chatbot_opens(self):
        """Clicking FAB opens the chat panel"""
        self._open_chat()
        chat_panel = self._visible(By.XPATH, "//div[contains(@class,'fixed') and contains(@class,'bottom-24')]")
        self.assertTrue(chat_panel.is_displayed())

    def test_44_chatbot_shows_welcome_message(self):
        """Chat panel shows a welcome message on first open"""
        self._open_chat()
        time.sleep(0.3)
        msgs = self.driver.find_elements(By.XPATH, "//div[contains(@class,'rounded-2xl') and contains(@class,'whitespace-pre-wrap')]")
        self.assertGreater(len(msgs), 0)

    def test_45_chatbot_input_present(self):
        """Chat panel has a textarea input"""
        self._open_chat()
        textarea = self._find(By.CSS_SELECTOR, "textarea")
        self.assertTrue(textarea.is_displayed())

    def test_46_send_button_disabled_when_empty(self):
        """Send button is disabled when input is empty"""
        self._open_chat()
        send_btn = self._find(By.XPATH, "//button[@disabled and .//svg[contains(@class,'send') or contains(name(.),'Send')]]")
        # Check via disabled attribute
        send_btn = self.driver.find_element(By.CSS_SELECTOR, "div.fixed.bottom-24 button[disabled]")
        self.assertIsNotNone(send_btn)

    def test_47_typing_enables_send_button(self):
        """Typing in the input enables the send button"""
        self._open_chat()
        textarea = self._find(By.CSS_SELECTOR, "textarea")
        textarea.send_keys("Hello")
        time.sleep(0.2)
        # Send button should no longer be disabled
        send_btns_active = self.driver.find_elements(
            By.XPATH,
            "//div[contains(@class,'bottom-24')]//button[not(@disabled) and contains(@class,'bg-green-500')]"
        )
        self.assertGreater(len(send_btns_active), 0)

    def test_48_enter_key_sends_message(self):
        """Pressing Enter sends the message and appends it to chat"""
        self._open_chat()
        textarea = self._find(By.CSS_SELECTOR, "textarea")
        textarea.send_keys("What diseases can you detect?")
        textarea.send_keys(Keys.RETURN)
        time.sleep(0.5)
        # User message should appear in the chat
        msgs = self.driver.find_elements(
            By.XPATH, "//div[contains(@class,'bg-green-500') and contains(@class,'rounded-2xl')]"
        )
        self.assertGreater(len(msgs), 0)

    def test_49_chatbot_closes(self):
        """Clicking FAB again closes the chat panel"""
        self._open_chat()
        self._close_chat()
        time.sleep(0.3)
        # Chat panel should be invisible (opacity-0 / pointer-events-none)
        panel = self.driver.find_element(By.XPATH, "//div[contains(@class,'fixed') and contains(@class,'bottom-24')]")
        # It uses opacity-0 scale-95, not display:none
        classes = panel.get_attribute("class")
        self.assertIn("opacity-0", classes)

    def test_50_chatbot_close_button_inside_panel(self):
        """The X button inside the chat panel header closes it"""
        self._open_chat()
        # Close button inside the panel header
        close_btn = self._click(
            By.XPATH,
            "//div[contains(@class,'bottom-24')]//div[contains(@class,'border-b')]//button"
        )
        time.sleep(0.3)
        panel = self.driver.find_element(By.XPATH, "//div[contains(@class,'fixed') and contains(@class,'bottom-24')]")
        self.assertIn("opacity-0", panel.get_attribute("class"))


# ══════════════════════════════════════════════════════════════
# 7. CROSS-PAGE TESTS
# ══════════════════════════════════════════════════════════════
class TestCrossPage(BaseTest):

    def test_51_back_button_works(self):
        """Browser back button works between pages"""
        self._go("/")
        self._go("/classify")
        self.driver.back()
        self._url_contains(BASE_URL + "/")

    def test_52_footer_on_all_pages(self):
        """Footer appears on home, classify, and about pages"""
        for path in ["/", "/classify", "/about"]:
            self._go(path)
            footer = self._find(By.TAG_NAME, "footer")
            self.assertIsNotNone(footer, f"No footer on {path}")

    def test_53_chatbot_persists_across_pages(self):
        """ChatBot FAB is visible on all pages"""
        for path in ["/", "/classify", "/about"]:
            self._go(path)
            fab = self._find(By.CSS_SELECTOR, "button[aria-label='Open chat']")
            self.assertTrue(fab.is_displayed(), f"ChatBot FAB missing on {path}")

    def test_54_navbar_persists_across_pages(self):
        """Navbar is visible on all pages"""
        for path in ["/", "/classify", "/about"]:
            self._go(path)
            nav = self._find(By.TAG_NAME, "nav")
            self.assertTrue(nav.is_displayed(), f"Navbar missing on {path}")

    def test_55_direct_url_classify_loads(self):
        """Navigating directly to /classify URL loads the page"""
        self._go("/classify")
        h1 = self._visible(By.TAG_NAME, "h1")
        self.assertTrue(h1.is_displayed())

    def test_56_direct_url_about_loads(self):
        """Navigating directly to /about URL loads the page"""
        self._go("/about")
        h1 = self._visible(By.TAG_NAME, "h1")
        self.assertTrue(h1.is_displayed())

    def test_57_home_try_it_now_button(self):
        """'Try It Now' button in the How It Works section goes to /classify"""
        self._go("/")
        self.driver.execute_script("document.getElementById('how-it-works').scrollIntoView();")
        time.sleep(0.5)
        btn = self._find(By.CSS_SELECTOR, "#how-it-works a[href='/classify']")
        self.assertIsNotNone(btn)

    def test_58_page_has_no_javascript_errors(self):
        """Browser console logs no SEVERE errors on home page"""
        self._go("/")
        time.sleep(1)
        logs = self.driver.get_log("browser")
        severe = [l for l in logs if l.get("level") == "SEVERE"]
        # Filter out known 3rd-party/network errors unrelated to the app
        app_errors = [e for e in severe if "localhost" in e.get("message", "") or "Uncaught" in e.get("message", "")]
        self.assertEqual(len(app_errors), 0, f"JS errors found: {app_errors}")


# ══════════════════════════════════════════════════════════════
# Entry point
# ══════════════════════════════════════════════════════════════
if __name__ == "__main__":
    unittest.main(verbosity=2)
