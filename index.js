import data from './data.json' assert {type: 'json'};

(function chart() {
    const displayBars = () => {
        const chartContainer = document.querySelector('.chart__box')

        // Get the day
        const options = { weekday: 'long' }
        const day = new Intl.DateTimeFormat("en-US", options).format()
        const formattedDay = day.slice(0, 3).toLowerCase()

        for (let i = 0; i < data.length; i++) {
            // Create box element which contains the bar, price and title
            const chartBox = document.createElement('div')
            chartBox.classList.add('chart')

            // Create bar element
            const bar = document.createElement('div')
            bar.classList.add('chart__bar')
            bar.style.height = `${data[i].amount * 2.5}px`

            // Apply blue background color on the corresponding bar of the day
            if (data[i].day === formattedDay) {
                bar.style.backgroundColor = 'hsl(186, 34%, 60%)'
            }

            // Create price element
            const price = document.createElement('p')
            price.textContent = `$${data[i].amount}`
            price.classList.add('chart__price')

            // Create day element
            const day = document.createElement('p')
            day.textContent = data[i].day
            day.classList.add('chart__day')

            // Append created elements
            chartBox.append(bar, price, day)
            chartContainer.append(chartBox)
        }
    }

    displayBars();
})();