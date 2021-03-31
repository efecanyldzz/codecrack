class MassBar {
    setPercentage(masses, bars, totalMass) {
        [...bars].forEach((bar, index) => {
            bar.style.width = masses[index].innerText / totalMass.innerText * 100 + '%'
        })
    }
}