const date = new Date()
const current_day = date.getDate() 
const current_month = date.getMonth() 
const current_year = date.getFullYear()

function calc_date(){
    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')
    const amont_of_days = new Date(parseInt(year.value), parseInt(month.value), 0).getDate()
    let total_years = parseInt(current_year - year.value)
    let total_months = 12 - parseInt(month.value)
    let total_days = parseInt(day.value - current_day)
    if(total_days < -1){
        total_days = total_days * -1
    }

    if(day.value == '' || month.value == '' || year == ''){
        let messages_invalid = document.querySelectorAll('.message-invalid')
        for(var i = 0; i <= messages_invalid.length - 1; i++){
            messages_invalid[i].style.display = 'block'
        }
        if(document.querySelector('.inputs') != null){
            return document.querySelector('.inputs').setAttribute('class','invalid-inputs')
        }
        return
    }
    if(parseInt(day.value) > amont_of_days){
        document.querySelector('.inputs').setAttribute('class','invalid-inputs')
        document.querySelector('#invalid_1').style.display = 'block'
    }
    else if(parseInt(month.value) > 12){
        document.querySelector('.inputs').setAttribute('class','invalid-inputs')
        return document.querySelector('#invalid_2').style.display = 'block'
    }
    else if(parseInt(year.value) > current_year){
        document.querySelector('.inputs').setAttribute('class','invalid-inputs')
        return document.querySelector('#invalid_3').style.display = 'block'
        
    }

    if(current_month < month.value){
        total_years -= 1
    }
    if(current_day > day.value){
        total_months += 1
    }
    if(document.querySelector('.inputs') == null){
        for(var i = 0; i <= messages_invalid.length - 1; i++){
            messages_invalid[i].style.display = 'none'
        }
        return document.querySelector('.invalid-inputs').setAttribute('class','inputs')
    }

    let current_values = [0,0,0]  
    let all_boolean = [false,false,false]  
    let time_interval = setInterval(() => {
        document.getElementById('total_years').innerText = current_values[0]
        document.getElementById('total_months').innerText = current_values[1]
        document.getElementById('total_days').innerText = current_values[2]
        if(total_years > current_values[0]){
            current_values[0] += 1
        }
        else if (total_years == current_values[0]){
            all_boolean[0] = true
        }
        if(total_months > current_values[1]){
            current_values[1] += 1
        }
        else if (total_months == current_values[1]){
            all_boolean[1] = true
        }
        if(total_days > current_values[2]){
            current_values[2] += 1
        }
        else if (total_days == current_values[2]){
            all_boolean[2] = true
        }
        if(all_boolean[0] && all_boolean[1] && all_boolean[2]){
            clearInterval(time_interval)
        }

    },100)
    current_values = [0,0,0]
    all_boolean = [false,false,false] 
}