This is a comprehensive **Brand Guide for CoreFour Advisors**, structured to the professional standard you provided.

This document serves as the "source of truth" for the CoreFour brand. It bridges the gap between the technical files you uploaded (SOPs, HTML prototypes) and the high-finance audience you are pitching (Private Equity Deal Teams).

---

# CoreFour Advisors | Brand Operating Manual

**Version 2.1: The "Institutional" Standard**

## 1. Brand Foundation

*The strategic soul of the brand. This defines why we exist and how we behave.*

### **1.1 Brand Story**

We were born from a frustration with "AI Tourism." Private Equity firms are inundated with pitch decks promising "digital transformation" but lacking operational reality. **CoreFour** was created to bring the rigor of financial diligence to the chaos of AI. We are not consultants; we are auditors of the future. We combine four distinct disciplines (PE, AI, UX, OP) to answer one question: **"Is this real?"**

### **1.2 Mission Statement**

"To replace technical speculation with operational certainty. We provide Private Equity investors with defensible, 'PE-native' answers regarding AI value creation."

### **1.3 The Core Values**

* **Defensibility First:** If we can't prove it in a spreadsheet or a prototype, we don't present it.
* **Speed to Signal:** We operate in deal time (15-day sprints), not consulting time (6-month roadmaps).
* **Code over Concepts:** We don't just recommend; we build the prototype to prove feasibility.
* **Radical Neutrality:** We are not cheerleaders for technology. We are just as happy to kill a bad AI project as we are to validate a good one.

---

## 2. Visual Identity

*The "Deep Blue Diligence" aesthetic. Our visual language must signal "Capital" (Stability) and "Code" (Precision).*

### **2.1 Logo Specifications**

**The Logomark:** "The Focal Point."
A solid **Oxford Navy** square with a **Signal Blue** bracket on the top-right corner. This represents "framing the chaos" and "zooming in on value."

* **Clear Space:** The logo must always be surrounded by empty space equal to the height of the letter "C" in the wordmark.
* **Misuse:**
* Do not use the logo on "vibrating" backgrounds (e.g., bright red or patterned images).
* Do not make the "Signal Blue" bracket green or any other color.
* Do not use the logomark without the wordmark in external formal documents (Decks/Memos).



### **2.2 Color Palette**

We use a "Dark Mode" aesthetic for presentations (to reduce eye strain and increase focus) and a "Paper" aesthetic for Memos (for readability).

**Primary (The "Suit")**

* **Oxford Navy:** `#0A192F` (Backgrounds, Headers)
* **Steel Slate:** `#64748B` (Subtext, Dividers, Borders)

**Accent (The "Signal")**

* **Signal Blue:** `#3B82F6` (Primary Buttons, Key Metrics, The "One Thing" to look at)
* **Platinum:** `#F1F5F9` (Memo Backgrounds—never pure white)

**Reporting (The "RAG" Status)**

* **Invest (Green):** `#10B981` (Emerald)
* **Caution (Amber):** `#F59E0B` (Standard Amber)
* **Stop (Red):** `#EF4444` (Crimson)

### **2.3 Typography**

We use a specific pairing to balance "Tech" and "Government" vibes.

* **Headlines: Outfit** (Google Font)
* *Usage:* Slide Titles, Section Headers, KPIs.
* *Weight:* **Bold (700)** or **SemiBold (600)**.
* *Rule:* Use ALL CAPS for slide titles with wide letter-spacing (1px).


* **Body Copy: Public Sans** (Google Font)
* *Usage:* All paragraph text, bullet points, and tables.
* *Weight:* Regular (400).
* *Why:* It is optimized for screen reading and dense information (SOPs).


* **Data/Code: JetBrains Mono** (Google Font)
* *Usage:* Code snippets, specific technical parameters in tables.



### **2.4 Imagery & Data Style**

* **Photography:** Minimal. If used, it must be black & white with a "Signal Blue" overlay. No stock photos of "people shaking hands" or "robots touching fingers."
* **Charts:**
* No 3D charts.
* No "Rainbow" charts. Use shades of Navy for categories, and Signal Blue for the *insight*.



---

## 3. Verbal Identity

*How we speak. We sound like a Senior Operating Partner, not a Tech Salesman.*

### **3.1 Tone of Voice**

* **Clinical:** We diagnose; we don't sell.
* **Concise:** We respect the deal team's time. BLUF (Bottom Line Up Front) always.
* **Skeptical but Optimistic:** We know 90% of AI is hype. We are looking for the 10% that generates margin.

### **3.2 Vocabulary Guide**

| **Don't Say** | **Do Say** | **Reasoning** |
| --- | --- | --- |
| "Digital Transformation" | "Margin Improvement" | Investors buy EBITDA, not transformation. |
| "Tech Stack" | "Architecture" | "Stack" sounds commoditized; "Architecture" sounds structural. |
| "Users" | "Operators" | In a PE context, employees are operational levers. |
| "We think..." | "Data indicates..." | Never hedge. Ground everything in evidence. |
| "Cool feature" | "High-leverage capability" | Cool doesn't pay the bills. Leverage does. |

---

## 4. Practical Application

*Rules for our three primary deliverables.*

### **4.1 The Pitch Deck (The "Show")**

* **Background:** Always **Oxford Navy**.
* **Text:** White (Headlines) and Slate (Body).
* **Layout:**
* Top Left: Slide Title (Outfit, All Caps).
* Top Right: The "Takeaway" sentence in **Signal Blue**.
* Center: One major visual (Chart or Diagram).
* Bottom: Supporting bullet points (max 3).



### **4.2 The Diligence Memo (The "Proof")**

* **Background:** **Platinum** (`#F1F5F9`).
* **Text:** Dark Navy (`#0F172A`)—pure black is too harsh.
* **Layout:** Standard document format.
* **Key Feature:** The "Red Flag/Green Light" boxes.
* *Green Box:* `background: #D1FAE5; border-left: 5px solid #10B981;`
* *Red Box:* `background: #FEE2E2; border-left: 5px solid #EF4444;`



### **4.3 The Prototype (The "Product")**

* **Interface:** Clean, utilitarian.
* **Branding:** The CoreFour logo should be small and in the footer. The prototype is about the *client's* data, not our brand.

---

## 5. CSS Implementation (For Developers)

*Copy this block into any web-based deliverable to instantly ensure brand compliance.*

```css
:root {
    /* CoreFour Institutional Palette v2.1 */
    --primary: #0A192F;       /* Oxford Navy */
    --secondary: #64748B;     /* Steel Slate */
    --accent: #3B82F6;        /* Signal Blue */
    --bg-paper: #F1F5F9;      /* Platinum */
    --text-main: #0F172A;     /* Dark text for memos */
    --text-inverse: #FFFFFF;  /* White text for decks */
    
    /* Reporting Status */
    --status-go: #10B981;
    --status-caution: #F59E0B;
    --status-stop: #EF4444;

    /* Fonts */
    --font-display: 'Outfit', sans-serif;
    --font-body: 'Public Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}

```