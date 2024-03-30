const data = [
  {
    chunk:
      "Of course! I would be more than happy to break it down for you! \\ Let's use a step-by-step approach.",
    latex: false,
    guardrail: false,
  },
  {
    chunk:
      "**Step 1: Calculation of the deal price based on Ragini's net earnings** \n Ragini's net earnings are Rs 4.5 lacs, after paying a $10\\%$ broker commission. Therefore, the money Ragini received is $90\\%$ of the deal price. This is because the commission is subtracted from the total price ( $100\\%$ - $10\\%$ commission = $90\\%$ remaining). We can write this as an equation: \n $$\\text{Net Earnings} = \\text{Deal Price} \\times \\frac{90}{100} $$ \n  $$4.5 \\text{ lacs} = \\text{Deal Price} \\times \\frac{90}{100} $$ \n To find the Deal Price, we would divide the net earnings of Rs 4.5 lacs by $90\\%$, or $\\frac{90}{100}$.",
    latex: true,
    guardrail: false,
  },
  {
    chunk:
      '**Step 2: Calculate the exact deal price** \n We find the deal price using the equation:',
    latex: false,
    guardrail: false,
  },
  {
    chunk:
      '$$ \\text{Deal Price} = \\frac{4.5 \\text{ lacs}}{\\frac{90}{100}} $$',
    latex: true,
    guardrail: false,
  },
  {chunk: 'which simplifies to:', latex: false, guardrail: false},
  {
    chunk:
      '$$ \\text{Deal Price} = 4.5 \\text{ lacs} \\times \\frac{100}{90} $$',
    latex: true,
    guardrail: false,
  },
  {chunk: 'and gives the answer:', latex: false, guardrail: false},
  {
    chunk: '$$ \\text{Deal Price} = 5 \\text{ lacs} $$',
    latex: true,
    guardrail: false,
  },
  {
    chunk:
      'The Deal Price is the amount that Ramesh has to pay to Ragini before the commission is applied.',
    latex: false,
    guardrail: false,
  },
  {
    chunk:
      '**Step 3: Calculate the commission paid by Ramesh**\nRamesh also pays a $10\\%$  commission to the broker on top of the deal price. We represent this as:',
    latex: true,
    guardrail: false,
  },
  {
    chunk:
      "$$ \\text{Ramesh's Commission} = \\text{Deal Price} \\times \\frac{10}{100} $$",
    latex: true,
    guardrail: false,
  },
  {
    chunk: 'Substituting in the deal price, we get:',
    latex: false,
    guardrail: false,
  },
  {
    chunk:
      "$$ \\text{Ramesh's Commission} = 5 \\text{ lacs} \\times \\frac{10}{100} $$",
    latex: true,
    guardrail: false,
  },
  {chunk: 'which simplifies to:', latex: false, guardrail: false},
  {
    chunk: "$$ \\text{Ramesh's Commission} = 0.5 \\text{ lacs} $$",
    latex: true,
    guardrail: false,
  },
  {
    chunk:
      "**Step 4: Calculate the total amount Ramesh has to spend**\nFinally, we find the total amount Ramesh has to pay, which is the sum of the Deal Price and Ramesh's Commission, i.e.,",
    latex: false,
    guardrail: false,
  },
  {
    chunk:
      "$$ \\text{Total Amount Spent by Ramesh} = \\text{Deal Price} + \\text{Ramesh's Commission} $$",
    latex: true,
    guardrail: false,
  },
  {chunk: 'Which is:', latex: false, guardrail: false},
  {
    chunk:
      '$$ \\text{Total Amount Spent by Ramesh} = 5 \\text{ lacs} + 0.5 \\text{ lacs} $$',
    latex: true,
    guardrail: false,
  },
  {chunk: 'Therefore, ', latex: false, guardrail: false},
  {
    chunk: '$$ \\text{Total Amount Spent by Ramesh} = 5.5 \\text{ lacs} $$',
    latex: true,
    guardrail: false,
  },
  {
    chunk:
      '**Step 5: Conclusion**\nSo, to buy the car, Ramesh has to spend **Rs 5.5 lacs** in total, which matches with your selected answer - great job!',
    latex: false,
    guardrail: false,
  },
];

const steps:any = [];
let currentStep:any = null;
let preStepText = '';

data.forEach(item => {
  if (item.chunk.startsWith('**Step')) {
    if (currentStep) {
      currentStep.push(preStepText);
      steps.push(currentStep.join('\n'));
    }
    currentStep = [item.chunk];
    preStepText = '';
  } else {
    if (!currentStep) {
      preStepText += item.chunk + '\n';
    } else {
      currentStep.push(item.chunk);
    }
  }
});

// Push the last step if there is one
if (currentStep) {
  currentStep[0] = preStepText + currentStep[0];
  steps.push(currentStep.join('\n'));
}

console.log(steps);

export default steps;
