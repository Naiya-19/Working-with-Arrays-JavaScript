const eternals = [
    {
      name: "Ikaris",
      power: "Flight",
      skills: ["speed", "intelligence", "regeneration"],
      img: "eternals\\Ikaris.png"
    },
    {
      name: "Sersi",
      power: "Matter Manipulation",
      skills: ["telepathy", "telekinesis", "illusion"],
      img: "eternals\\Sersi.jpg"

    },
    {
      name: "Thena",
      power: "Weapon Manifestation",
      skills: ["immortality", "strength", "agility"],
      img: "eternals\\Thena.jpg"
    
    },
    {
      name: "Kingo",
      power: "Energy Projection",
      skills: ["martial arts", "flight", "swords"],
      img: "eternals\\Kingo.jpg"
    
    },
    {
      name: "Phastos",
      power: "Technopathy",
      skills: ["inventor", "engineering", "transmute matter"],
      img: "eternals\\Phastos.jpg"
      
    }
  ];

  const eternalsListDiv = document.querySelector('#eternalsList');
  eternals.forEach(eternal => {
      const p = document.createElement('p');
      p.textContent = eternal.name;
      eternalsListDiv.append(p);
  });

   function findEternal() {
       const skill = document.querySelector('#skillInput').value;
       const resultDiv = document.querySelector('#result');
       resultDiv.innerHTML = '';

       const foundEternal = eternals.find(eternal => eternal.skills.includes(skill));

       if (foundEternal) {
        const p = document.createElement('p');
        p.textContent = `${foundEternal.name} Skill is: ${skill}`;
        p.classList.add('pic');

        const img = document.createElement('img');
        img.src = foundEternal.img;
        img.classList.add('selectedEternalPic');
        img.alt = 'Eternal';

        resultDiv.append(p, img);
    } else {
        const p = document.createElement('p');
        p.textContent = 'No Eternal found with that skill.';
        resultDiv.append(p);
    }
}