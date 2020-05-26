import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        
            <ScrollView>
                <View style={styles.screen}>
                    <TitleText>The Game is Over!</TitleText>
                    <View style={styles.imageContainer}>
                        <Image 
                            fadeDuration={300}
                            source={require('../assets/success.png')}
                            //source={{uri: 'https://www.google.com.ar/search?q=summit+image&sxsrf=ALeKk03SPI-D0iqsoyux0ofrB2j3WfdEPw:1590011559531&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK7cbRtsPpAhWsGrkGHb6zD1sQ_AUoAXoECAsQAw&biw=1366&bih=663#imgrc=DyV_EP3LEL2cQM'}}  
                            style={styles.image} 
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.resultContainer}>
                        <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> 
                                rounds to guess the number <Text style={styles.highlight}>{props.roundsNumber}</Text>
                        </BodyText>
                    </View>
                    <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
                </View> 
            </ScrollView>
       
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary
    }
})

export default GameOverScreen;