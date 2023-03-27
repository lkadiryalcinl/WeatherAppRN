import React from 'react'
import { View, StatusBar, Text,ImageBackground } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import styles from './Home.style'
import InfoCard from '../../components/InfoCard'

const style = styles['light']

const Statusbar = () => <StatusBar translucent backgroundColor='transparent'/>

const Searchbar = () => {
    return (
        <View style={style.search_bar_container}>
            <SearchBar
                placeholder="Şehir ismi giriniz..."
                onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

const TopContainer = () => {
    return (
        <View style={style.top_container}>
            <View style={style.animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={Anims.rainy} />
            </View>
            <View style={style.other_daily_container}>
                {/* Diğer saatlerdeki hava durumları */}
            </View>
        </View>
    )
}

    
const MidContainer = () => <InfoCard/>


const BottomContainer = () => {
    return (

        <View style={style.bottom_container}>
            <Text>Test</Text>
        </View>

    )
}

export default function () {
    return (
        <ImageBackground style={style.container} source={require('../../assets/images/light_mode_back.jpeg')}>
            <Statusbar />
            <Searchbar />
            <TopContainer />
            <MidContainer />
            <BottomContainer />
        </ImageBackground>
    );
};