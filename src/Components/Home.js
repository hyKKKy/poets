import { Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react';
import './Home.css'

export function Home()
{
    const [value, setValue] = useState('Light');

    function changeTheme(event){

        let a = event.target.value;

        if(a === 'Light'){
            setValue('Light')
        }
        else{
            setValue('Dark')
        }
    }


    return(
        <div className='wrapper'>
            <nav id='nav'>
                <form className='forma'>
                    <div>
                        <span>Dark</span>
                        <input className='radioBtn-theme' type="radio" name="theme" value='Dark' onChange={changeTheme}></input>
                    </div>
                    <div>
                        <span>Light</span>
                        <input className='radioBtn-theme' type="radio" name="theme" value='Light' onChange={changeTheme} defaultChecked></input>
                    </div>
                </form>
                <li>
                    <a class="btn btn-primary" href="Main" role="button">Головна</a>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Поети
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="Shevchenko">Тарас Шевченко</a></li>
                            <li><a class="dropdown-item" href="Lesya">Леся Українка</a></li>
                            <li><a class="dropdown-item" href="Franko">Іван Франко</a></li>
                        </ul>
                    </div>
                </li>
            </nav>
            <div className={value}>
                <Outlet></Outlet>
            </div>
            <div id='footer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet quam id sapien malesuada dignissim nec feugiat enim. Nunc nunc enim, dictum sed ipsum ac, luctus vulputate leo. Phasellus convallis aliquet erat, eu pellentesque metus. Etiam vel molestie magna, ut porta lorem. Donec cursus elit nec maximus mattis. Cras consectetur mattis lobortis. Sed quis urna et orci vehicula volutpat. Donec pulvinar felis vel finibus lacinia. Sed sed ornare ante. Nulla nec metus id est ullamcorper malesuada. Nullam magna nibh, lobortis sit amet porttitor eget, dictum finibus lorem. Morbi congue auctor elit, at ultricies velit varius ut. Suspendisse gravida, quam sit amet tincidunt dapibus, nunc nisi viverra velit, quis ultricies dui orci non lectus. Suspendisse non lobortis tortor. Ut id turpis ac risus venenatis elementum. Vivamus vel semper libero.t</div>
        </div>
    )
}