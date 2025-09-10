# RGB-LLM Prompt Mapper

A minimal open-source tool for reasoning with **three poles of any problem** using the RGB color model. Each axis (R, G, B) represents a tension or emphasis, and slider positions produce both a **JSON output** and a **color swatch** as intuitive feedback.

---

## ✨ Features
- Define **three poles** (tensions or emphases) and adjust weights via sliders.
- Output structured **JSON** describing the blend.
- Generate a **color swatch** that encodes the alignment:
  - **Black** → neglect / collapse (no pole emphasized).
  - **White** → fantasy / perfection (all poles maxed).
  - **Grey** → compromise / mushy middle (all poles balanced equally).
  - **Bright hues** → focus / realistic calibration (clear trade-offs chosen).

---

## 🔧 How It Works
Each axis can be defined in one of two modes:

### 1. Opposites Mode
Use when poles are true **tensions** (e.g. *Fast ↔ Slow*).
- Slider marks a **position along a continuum**.
- More of one means less of the other.

### 2. Independent Mode
Use when poles are **independent emphases** (e.g. *Inspiration, Execution, Sustainability*).
- Slider marks a **level of emphasis**.
- Each pole can be high or low without cancelling the others.

---

## 📄 Example JSON Output
```json
{
  "problem": "Website redesign",
  "axes": [
    { "axis": "R", "left": "Fast", "right": "Slow", "weight": 0.7, "opposite": true },
    { "axis": "G", "left": "Cheap", "right": "Expensive", "weight": 0.2, "opposite": true },
    { "axis": "B", "left": "Inspiration", "right": "", "weight": 0.9, "opposite": false }
  ],
  "color": "#cc9933"
}
```

---

## 🎨 Color Semantics
- **Black (#000000)** → Neglect (no priorities chosen).
- **White (#ffffff)** → Fantasy (all maxed, unrealistic).
- **Grey (low saturation)** → Compromise (blurred priorities).
- **Bright / Saturated hues** → Focused calibration (realistic emphasis or trade-off).

The swatch acts as a **diagnostic mirror**: the more vivid the color, the more realistic and executable the calibration.

---

## 🧭 Quick Start
1. **Name your poles** → define each axis as a tension or emphasis.
2. **Slide** → adjust each axis to reflect your current stance.
3. **See the swatch** → intuitive check of alignment realism.
4. **Copy JSON** → use the structured blend for analysis, storytelling, or schema-aware AI prompts.

---

## 💡 Example Applications
- **Project Management**: Good vs. Fast vs. Cheap.
- **Creative Writing**: Concrete vs. Abstract, Past vs. Future, Individual vs. Collective.
- **Financial Planning**: Security vs. Growth, Present vs. Future, Self vs. Family.
- **Job Hunting**: Compensation vs. Fulfillment, Stability vs. Growth, Self vs. Organization.
- **Scientific Research**: Theoretical vs. Applied, Conservative vs. Radical, Individual vs. Collaborative.
- **Personal Calibration**: Body vs. Mind, Routine vs. Change, Inner vs. Outer.

---

## 🚧 Roadmap
- Add **preset library** for common triads.
- Compute **signal density score** (Neglect / Fantasy / Compromise / Focused).
- Optional GPT integration to generate outputs (stories, analyses) from JSON schema.
- Visualize poles in **3D RGB space** with polygons and collision containers.

---

## 📜 License
MIT — use, remix, extend. Just keep the signal clean.

