# Selenium Tests — PlantAI

This directory contains the Selenium automation test suite for the PlantAI plant disease detection website.

## Structure

```
tests/
├── test_plant_ai.py    # 58 automated tests
├── requirements.txt    # Python dependencies
├── conftest.py         # pytest configuration
└── README.md           # This file
```

## Prerequisites

| Requirement | Notes |
|-------------|-------|
| Python 3.8+ | |
| Google Chrome | Latest stable |
| ChromeDriver | Managed automatically by `webdriver-manager` |
| Dev server running | `npm run dev` in the project root |

## Setup

```bash
# 1. Install Python dependencies
pip install -r tests/requirements.txt

# 2. Start the dev server (in a separate terminal)
npm run dev

# 3. Run the tests
pytest tests/test_plant_ai.py -v
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PLANTAI_URL` | `http://localhost:5173` | Base URL of the running site |
| `HEADLESS` | `0` | Set to `1` to run Chrome in headless mode (useful for CI) |

### Example — headless CI run

```bash
HEADLESS=1 PLANTAI_URL=http://localhost:5173 pytest tests/test_plant_ai.py -v
```

## Test Coverage (58 tests)

| Class | Tests | What is covered |
|-------|-------|-----------------|
| `TestNavigation` | 9 | Logo, nav links, active state, fixed navbar, Analyze Plant CTA, mobile hamburger |
| `TestHomePage` | 8 | Title, hero h1, CTA buttons, benefits stats, how-it-works steps, plant cards, footer |
| `TestClassifyPage` | 11 | Heading, 3 tabs, upload zone, file input, tab switching, invalid file error, tips, ready state |
| `TestAboutPage` | 7 | Heading, badge, sections, benefit cards, tech stack, CTA navigation |
| `TestLanguageSwitcher` | 6 | Dropdown open/close, switch EN→Tamil→Telugu→EN, active checkmark |
| `TestChatBot` | 9 | FAB visibility, open/close, welcome message, input, send button state, Enter key, close button |
| `TestCrossPage` | 8 | Back button, footer on all pages, ChatBot FAB on all pages, direct URL loading, no JS errors |
