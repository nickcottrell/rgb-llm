// Toggle between sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const buttons  = Array.from(document.querySelectorAll('nav [data-target]'));

  function show(id) {
    sections.forEach(sec => {
      const on = (sec.id === id);
      sec.hidden = !on;                       // native hidden attr
      sec.classList.toggle('hidden', !on);    // class fallback
    });
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === id);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.target;
      show(id);
      // optional: reflect in URL
      history.replaceState(null, '', `#${id}`);
    });
  });

  // Initial state: hash (#madlibs) or default to sliders
  const initial = (location.hash || '#sliders').slice(1);
  show(initial);
});




// Sliders config update
["rigor", "human", "scale",
 "rigor-left", "rigor-right",
 "human-left", "human-right",
 "scale-left", "scale-right"].forEach(id => {
  document.getElementById(id).addEventListener("input", updateSlidersJSON);
});
function updateSlidersJSON() {
  const json = {
    axes: {
      rigor: {
        left: document.getElementById("rigor-left").value,
        right: document.getElementById("rigor-right").value,
        value: document.getElementById("rigor").value / 100
      },
      human: {
        left: document.getElementById("human-left").value,
        right: document.getElementById("human-right").value,
        value: document.getElementById("human").value / 100
      },
      scale: {
        left: document.getElementById("scale-left").value,
        right: document.getElementById("scale-right").value,
        value: document.getElementById("scale").value / 100
      }
    }
  };
  document.getElementById("sliders-output").textContent = JSON.stringify(json, null, 2);
}
updateSlidersJSON();

// Attach event listeners for Mad Libs fields
["genre", "character", "action", "setting",
 "axis1", "axis1-left", "axis1-right",
 "axis2", "axis2-left", "axis2-right"].forEach(id => {
  document.getElementById(id).addEventListener("input", updateMadlibsJSON);
});

function updateMadlibsJSON() {
  const json = {
    prompt: "You are a creative writing assistant. Take the provided template, filled values, and axes, and generate a story that balances the axes accordingly.",
    template: "Write a {genre} story about {character} who {action} in a {setting}.",
    filled: {
      genre: document.getElementById("genre").value,
      character: document.getElementById("character").value,
      action: document.getElementById("action").value,
      setting: document.getElementById("setting").value
    },
    axes: {
      tone: {
        left: document.getElementById("axis1-left").value,
        right: document.getElementById("axis1-right").value,
        value: document.getElementById("axis1").value / 100
      },
      style: {
        left: document.getElementById("axis2-left").value,
        right: document.getElementById("axis2-right").value,
        value: document.getElementById("axis2").value / 100
      }
    }
  };

  document.getElementById("madlibs-output").textContent =
    JSON.stringify(json, null, 2);
}

// Run once on load
updateMadlibsJSON();


// Handle all copy buttons
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const text = document.getElementById(targetId).textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("JSON copied to clipboard!");
    });
  });
});
