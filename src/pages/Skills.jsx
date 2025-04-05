import React, {useState} from "react";
import "../css/Skills.css";

const skillSet = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend"},
    { name: "React", category: "Frontend"},
    { name: "Node.js", category: "Backend"},
    { name: "PHP", category:"Frontend" },
    { name: "MySQL", category: "Database"},
    { name: "Python", category: "Frontend" },
    { name: "Java", category: "Frontend"},
];

function Skills() {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);

    const categoryData = [...new Set(skillSet.map(skill => skill.category))];

    const toggleCategories = (category) => {
        setCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
    };

    const filteredSkills = skillSet.filter(skill => {
        const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categories.length === 0 || categories.includes(skill.category);
        return matchesSearch && matchesCategory;
    });
    return (
        <div className="skills-container">
            <h2 className="text-center">Skills</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search skills..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <div className="mb-3">
                <strong>Filter by Category:</strong>
                <div className="d-flex flex-wrap gap-2 mt-2">
                    {categoryData.map((category, index) => (
                        <button
                            key={index}
                            className={`btn btn-sm ${categories.includes(category)? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => toggleCategories(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <ul className="list-group">
                {filteredSkills.map((skill, index) => (
                    <li key={index} className="list-group-item"><strong>{skill.name}</strong> - {skill.category}</li>
                ))}
                {filteredSkills.length === 0 && (
                    <p className="text-center">No skills found that match your criteria.</p>
                )}
            </ul>
        </div>

    );

    
}

export default Skills;