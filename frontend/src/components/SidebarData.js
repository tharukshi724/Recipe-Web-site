import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Recipes',
        path:'/Recipes',
        icon:<GiIcons.GiHotMeal/>,
        cName:'nav-text'
    },
    {
        title: 'Upload Recipes',
        path:'/UpRecipes',
        icon:<BiIcons.BiUpload/>,
        cName:'nav-text'
    },
    
    {
        title: 'Grocery',
        path:'/Grocery',
        icon:<IoIcons.IoIosCart/>,
        cName:'nav-text'
    },
    {
        title: 'Pantry',
        path:'/Pantry',
        icon:<RiIcons.RiFridgeLine/>,
        cName:'nav-text'
    },
    {
        title: 'Meal Planner',
        path:'/MealPlanner',
        icon:<GiIcons.GiMeal/>,
        cName:'nav-text'
    },
    
    
    
]


