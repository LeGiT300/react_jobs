import {Stack} from 'expo-router'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()


const Layout = () => {
    const [fontsLoaded] = useFonts({
        'DMBold': require('../assets/fonts/DMSans-Bold.ttf'),
        'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
        'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
    });


    return <Stack/>;
}

export default Layout;