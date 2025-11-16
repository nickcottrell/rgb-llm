# RGB-LLM

*A tiny tool for thinking and reasoning in color — and a first experiment toward VRGB.*

RGB-LLM is a minimal interface for blending **three poles** of a problem into a single RGB vector.
Slide → blend → interpret the resulting color → export a JSON signal.

It's not a framework or a system.
It's a **calibration layer** — a lightweight tool for reasoning about tradeoffs, direction, and emphasis.

Use it for:

* creative prompts
* lightweight state cues
* multi-step workflows
* decision framing
* metadata for demos (e.g., Magic Fridge)

---

## 🌈 What is VRGB?

**VRGB** is the conceptual layer behind this repo —

> a low-dimensional vector space (color) used as a small shared signal surface for AI workflows.

RGB-LLM is the first UI for experimenting with that idea.

The motivating question:

**Can a tiny, bounded vector — literally R/G/B — carry useful micro-intent between AI modules without schema overhead or complex preference tables?**

This repo exists so I can explore that publicly.

---

## 🌱 Why This Exists

In multi-step AI workflows, the missing layer is often the simplest one:
the **small signals** that shape behavior between tools.

Signals like:

* "be more strict"
* "lean creative"
* "reduce detail"
* "keep tone consistent"

VRGB proposes a weirdly simple approach:
a **three-number vector** that encodes these shifts continuously.

RGB-LLM is a tiny interface for generating that vector.

---

## 🧠 The Deeper (Experimental) Idea

High-dimensional embeddings are great, but:

* expensive to serialize
* hard to inspect
* brittle across modules
* difficult to align
* not human-interpretable

VRGB flips the model:

### **A low-dimensional surface with useful properties:**

* bounded (0–1 floats)
* continuous gradients
* cheap to transmit
* easy to visualize
* vector-operable
* stable under drift

It won't replace embeddings —
it *complements* them for the small, continuous cues that keep tools coherent.

This is a **"what if?"** experiment:

**What if 3D color space is the right dimensionality for micro-intent?**

RGB-LLM is how I explore that.

---

## 🧩 How It Works

```
[ Your Poles ]
   R     G     B
    ↓    ↓    ↓
[ RGB-LLM UI ]   ← adjust sliders
    ↓
Color Swatch      ← intuitive feedback
    ↓
{ "r": 0.42, "g": 0.79, "b": 0.12 }   ← VRGB vector
    ↓
Downstream prompt / model / workflow
```

A tiny vector carrying directional meaning.

---

## 🚀 Getting Started

Just open `index.html` in a browser. No build step, no dependencies.

Adjust sliders, edit pole labels, and copy the resulting JSON.

---

## 📖 Usage

**Two modes:**

### Sliders Config
Create three custom axes to map your thought space. Each axis captures a dimension with two opposing poles and a slider to position yourself along that spectrum.

Click any pole label to customize it. The JSON output captures your pole definitions and current positions.

### Mad Libs Config
Build structured prompts with fill-in-the-blank templates plus adjustable style axes. Great for creative writing or prompt engineering.

---

## 📜 License

RGB-LLM is released under the **MIT License**.
You are free to use, fork, modify, and build on this work.

### Personal note

If you explore the VRGB concept or build something interesting with this repo,
I'd *love* to hear what you discover.

Not for credit or control —
just genuine curiosity about how others think about low-dimensional reasoning.

Feel free to open an issue, share a link, or reach out anytime.

---

## 📬 Contact

GitHub Issues • LinkedIn
Happy to collaborate, learn, and exchange ideas.

---

## Pedals for ideas 🎛

DEMO: https://nickcottrell.github.io/rgb-llm/
