class PercentageCalculator {
  constructor() {
    this.MONTHS_IN_YEAR = 12;
    this.LIVING_WAGE = 13000;

    this.incomeInput = document.getElementById('income');
    this.familyMembersInput = document.getElementById('family-members');
    this.childrenInput = document.getElementById('children');
    this.resultElement = document.getElementById('result');
    this.averageIncomeElement = document.getElementById('average-income--result');

    document.getElementById('percentage-form').addEventListener('input', this.handleFormInput.bind(this));
    document.querySelector('button').addEventListener('click', this.calculatePercentage.bind(this));
  }

  handleFormInput(event) {
    event.preventDefault();

    const income = parseFloat(this.incomeInput.value);
    const familyMembers = parseInt(this.familyMembersInput.value);

    const value = parseInt((income / familyMembers) / this.MONTHS_IN_YEAR);
    const numberFormat = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });

    if (isNaN(value)) {
      this.averageIncomeElement.textContent = '0 ₽';
    } else {
      this.averageIncomeElement.textContent = numberFormat.format(value);
    }
  }

  calculatePercentage(event) {
    event.preventDefault();

    const income = parseFloat(this.incomeInput.value);
    const familyMembers = parseInt(this.familyMembersInput.value);
    const children = parseInt(this.childrenInput.value);

    const averageIncomeFamily = income / this.MONTHS_IN_YEAR;
    const averageIncome = averageIncomeFamily / familyMembers;

    const childrenValue50 = !children ? 0 : (0.5 * this.LIVING_WAGE) * (!children ? 1 : children);
    const childrenValue75 = !children ? 0 : (0.75 * this.LIVING_WAGE) * (!children ? 1 : children);
    
    const value75 = (averageIncomeFamily + childrenValue50) / familyMembers;
    const value100 = (averageIncomeFamily + childrenValue75) / familyMembers;


    console.log(!children);

    console.log(childrenValue50);
    console.log(childrenValue75);

    if (averageIncome <= this.LIVING_WAGE) {
      if (value75 <= this.LIVING_WAGE) {
        if (value100 <= this.LIVING_WAGE) {
          this.resultElement.textContent = 'Положено семье 100%';
          return
        } else {
          this.resultElement.textContent = 'Положено семье 75%';
          return
        }
      } else {
        this.resultElement.textContent = 'Положено семье 50%';
        return
      }
    } else {
      this.resultElement.textContent = 'У вас превышение дохода. Право на выплату отсутствует';
    }
  }
}

const percentageCalculator = new PercentageCalculator();
