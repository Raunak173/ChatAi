const data2 = [
    {"chunk": "Absolutely, my friend! Let's compile all those steps into one much larger equation. We're going to use subscript D for Deal Price, E for Net Earnings, R for Ramesh's Commission, and T for Total amount spent by Ramesh. Here it goes:", "latex": false, "guardrail": false},
{"chunk": "First, we calculate the Deal Price:\n\\[ \\text{The Deal Price \"_\" {D}} = \\frac{E}{\\frac{90}{100}} \\]", "latex": true, "guardrail": false},
{"chunk": "Next, Ramesh also pays a 10% commission:\n\\[ \\text{Ramesh's Commission \"_\" {R}} = \\text{D} \\times \\frac{10}{100} \\]", "latex": true, "guardrail": false},
{"chunk": "Finally, the total amount spent by Ramesh is the sum of the deal price and his commission:\n\\[ \\text{Total \"_\" {T}} = \\text{D} + \\text{R} \\]", "latex": true, "guardrail": false},
{"chunk": "We can substitute the equation for D and R into T to get a single equation:", "latex": false, "guardrail": false},
{"chunk": "\\[ \\text{Total \"_\" {T}} = \\left(\\frac{E}{\\frac{90}{100}}\\right) +\\left(\\frac{E}{\\frac{90}{100}} \\times \\frac{10}{100}\\right) \\]", "latex": true, "guardrail": false},
{"chunk": "Substituting the actual values:", "latex": false, "guardrail": false},
{"chunk": "\\[ \\text{Total \"_\" {T}} = \\left(\\frac{4.5\\text{ lacs}}{\\frac{90}{100}}\\right) + \\left(\\frac{4.5\\text{ lacs}}{\\frac{90}{100}} \\times \\frac{10}{100}\\right) \\]", "latex": true, "guardrail": false},
{"chunk": "Solving the equation we'll have:\n\\[ \\text{Total \"_\" {T}} = 5\\text{ lacs} + 0.5\\text{ lacs} = 5.5\\text{ lacs} \\]", "latex": true, "guardrail": false},
{"chunk": "And that's it! Our long equation simplifies to the answer: Ramesh spends a total of Rs 5.5 lacs.", "latex": false, "guardrail": false},
]

export default data2