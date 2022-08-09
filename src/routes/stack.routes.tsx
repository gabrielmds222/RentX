import React  from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Complete } from '../screens/Complete';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
    return (
        <Navigator headerMode="none" initialRouteName='SignIn'>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
            <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
            <Screen name="Home" component={Home} />
            <Screen name="MyCars" component={MyCars} />
            <Screen name="CarDetails" component={CarDetails} />
            <Screen name="Scheduling" component={Scheduling} />
            <Screen name="SchedulingDetails" component={SchedulingDetails} />
            <Screen name="Complete" component={Complete} />
        </Navigator>
    );

}