import { calculateOffsets } from './diagram.svelte.js'


const EvA = $state({
    "version": 0.0,
    "name": "EvA",
    "description": "Evaluation Algorithm",
    "value": 2000,
    "bases": [
        {
            "name": "Culture",
            "id": "B1",
            "value": 100,
            "percent": 0.25,
            "categories": [
                {
                    "name": "Food",
                    "id": "C1.1",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Proteins",
                            "id": "I1.1.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Fats",
                            "id": "I1.1.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Carbohydrates",
                            "id": "I1.1.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Beverages",
                            "id": "I1.1.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Health",
                    "id": "C1.2",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Weight",
                            "id": "I1.2.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Glucose",
                            "id": "I1.2.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Urine pH",
                            "id": "I1.2.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Fitness",
                            "id": "I1.2.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Work",
                    "id": "C1.3",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Blood Pressure",
                            "id": "I1.3.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Hearth Rate",
                            "id": "I1.3.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Blood Oxygen",
                            "id": "I1.3.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Hours of Work in a Day",
                            "id": "I1.3.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Clothing",
                    "id": "C1.4",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Body temperature",
                            "id": "I1.4.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "GPS - position",
                            "id": "I1.4.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "How I dress",
                            "id": "I1.4.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Hours of rest in the day",
                            "id": "I1.4.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                }
            ]
        },
        {
            "name": "Habitat",
            "id": "B2",
            "value": 100,
            "percent": 0.25,
            "categories": [
                {
                    "name": "Architecture",
                    "id": "C2.1",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Chosen Standard",
                            "id": "I2.1.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Quality",
                            "id": "I2.1.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Architecture",
                            "id": "I2.1.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "LCA - Building",
                            "id": "I2.1.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Construction",
                    "id": "C2.2",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Energy Efficiency",
                            "id": "I2.2.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Energy Envelope",
                            "id": "I2.2.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Construction",
                            "id": "I2.2.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "PEB - Plus Energy Building",
                            "id": "I2.2.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Furniture",
                    "id": "C2.3",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Consumption - Appliances",
                            "id": "I2.3.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Noise",
                            "id": "I2.3.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Furniture",
                            "id": "I2.3.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "LCA - Furniture",
                            "id": "I2.3.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Indoor",
                    "id": "C2.4",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Ambient Temperature- Indoor",
                            "id": "I2.4.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Relative Humidity - Indoor",
                            "id": "I2.4.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Indoor",
                            "id": "I2.4.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "TVOC - Indoor",
                            "id": "I2.4.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                }
            ]
        },
        {
            "name": "Infrastructures",
            "id": "B3",
            "value": 100,
            "percent": 0.25,
            "categories": [
                {
                    "name": "Mobility",
                    "id": "C3.1",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Consumption - Mobility",
                            "id": "I3.1.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Maintenance - Infrastructure",
                            "id": "I3.1.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Mobility",
                            "id": "I3.1.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Maintenance - Vehicles",
                            "id": "I3.1.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Energy",
                    "id": "C3.2",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "My energy over time",
                            "id": "I3.2.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Energy used",
                            "id": "I3.2.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Energy",
                            "id": "I3.2.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Energy Quality",
                            "id": "I3.2.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Technology",
                    "id": "C3.3",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Consumption - Devices",
                            "id": "I3.3.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "RTA - Corporate technology performance",
                            "id": "I3.3.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Technology",
                            "id": "I3.3.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Artificial Intelligence impact",
                            "id": "I3.3.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Digital",
                    "id": "C3.4",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Leisure - Time",
                            "id": "I3.4.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Non leisure - Time",
                            "id": "I3.4.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Leisure - Space",
                            "id": "I3.4.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Non leisure - Space",
                            "id": "I3.4.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                }
            ]
        },
        {
            "name": "Nature",
            "id": "B4",
            "value": 100,
            "percent": 0.25,
            "categories": [
                {
                    "name": "Lands",
                    "id": "C4.1",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Soil sealing",
                            "id": "I4.1.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Forest Cover",
                            "id": "I4.1.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Soil",
                            "id": "I4.1.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Biodiversity integrity",
                            "id": "I4.1.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Habits",
                    "id": "C4.2",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "I throw it away",
                            "id": "I4.2.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Our debt",
                            "id": "I4.2.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "My gift",
                            "id": "I4.2.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Yes or no",
                            "id": "I4.2.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Water",
                    "id": "C4.3",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Water Energy Debt",
                            "id": "I4.3.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Green water",
                            "id": "I4.3.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Blue water",
                            "id": "I4.3.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Gray water",
                            "id": "I4.3.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                },
                {
                    "name": "Air",
                    "id": "C4.4",
                    "value": 100,
                    "percent": 0.25,
                    "indicators": [
                        {
                            "name": "Ambient Temperature - Outdoor",
                            "id": "I4.4.1",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "Relative Humidity - Outdoor",
                            "id": "I4.4.2",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "CO2 - Outdoor",
                            "id": "I4.4.3",
                            "value": 100,
                            "percent": 0.25
                        },
                        {
                            "name": "TVOC - Outdoor",
                            "id": "I4.4.4",
                            "value": 100,
                            "percent": 0.25
                        }
                    ]
                }
            ]
        }
    ]
});

export default EvA;

export function calculate() {
    EvA.bases.forEach(base => {
        base.categories.forEach(cat => {
            let indTotal = cat.indicators.reduce((acc, ind) => acc + ind.value, 0);
            cat.indicators.forEach(ind => { ind.percent = ind.value / indTotal });
        });
        let catTotal = base.categories.reduce((acc, cat) => acc + cat.value, 0);
        base.categories.forEach(cat => { cat.percent = cat.value / catTotal });
    });
    let baseTotal = EvA.bases.reduce((acc, base) => acc + base.value, 0);
    EvA.bases.forEach(base => { base.percent = base.value / baseTotal });
}

export function print() {
    console.log($state.snapshot(EvA));
}

export function updateBaseValue(baseName, newValue) {
    EvA.bases.find(b => b.name === baseName).value = newValue;
    calculate();
    calculateOffsets();
    print();
}

export function updateCategoryValue(categoryName, newValue) {
    EvA.bases.flatMap(b => b.categories).find(c => c.name === categoryName).value = newValue;
    calculate();
    calculateOffsets();

}

export function updateIndicatorValue(indicatorName, newValue) {
    EvA.bases.flatMap(b => b.categories).flatMap(c => c.indicators).find(i => i.name === indicatorName).value = newValue;
    calculate();
    calculateOffsets();
}