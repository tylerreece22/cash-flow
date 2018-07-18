import React from 'react';
import {StyleSheet, View, Platform, Image, ScrollView, Dimensions, ImageBackground, Text} from 'react-native';
import {Button, Divider, List, ListItem} from "react-native-elements";

export default class BudgetScreen extends React.Component {
    static navigationOptions = {
        title: 'Budget',
    };

    state = {
        budgetCategories: {},
    }

    addBudget() {

    }

    render() {
        return <ScrollView style={styles.container}>
                {/*<View style={styles.info}>*/}
                    {/*/!*<ListItem>*!/*/}
                        {/*/!*<Text style={styles.listItem}>Budget Categories</Text>*!/*/}
                    {/*/!*</ListItem>*!/*/}
                {/*</View>*/}
            <List>
                <ListItem
                    // roundAvatar
                    title='Limited supply! Its like digital gold!'
                    subtitle={
                        <View style={styles.subtitleView}>
                            <Image source={require('../assets/images/icon.png')} style={styles.ratingImage}/>
                            <Text style={styles.ratingText}>5 months ago</Text>
                        </View>
                    }
                    avatar={require('../assets/images/robot-dev.png')}
                />
            </List>
            <Button
                title='Add Budget' />
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    img: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    },
    listItem: {
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
    },
    addBudgetButton: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
    },
    //for react-native-elements
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
    //for react-native-elements
});
