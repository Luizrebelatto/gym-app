import React from "react";
import { Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import * as I from './styles'
import theme from "../../global/theme";

interface IButton {
    id: number;
    onPress: () => void;
    icon: ImageSourcePropType
}

export default function Login(){
    const buttons: IButton[] = [
        {
            id: 1,
            onPress: () => console.log("social login facebook"),
            icon: require("../../assets/facebook.png")
        },
        {
            id: 2,
            onPress: () => console.log("social login google"),
            icon: require("../../assets/google.png")
        }
    ]

    return (
        <ImageBackground
            source={require("../../assets/background.png")}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <I.Content>
                <TouchableOpacity>
                    <I.LinearGradientView
                        colors={[theme.colors.gradient01.color02, theme.colors.gradient01.color01]}
                        start={{ y: 0, x: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <I.TextRegister>Registro</I.TextRegister>
                    </I.LinearGradientView>
                </TouchableOpacity>
                <I.WrapperFoot>
                    <I.WrapperButton>
                        {buttons.map((item, index) => (
                            <I.SocialButtonLogin key={index}>
                                <Image
                                    resizeMode="cover"
                                    source={item.icon}
                                    style={{ width: 20, height: 20 }}
                                />
                            </I.SocialButtonLogin>
                        ))}
                    </I.WrapperButton>
                    <I.WrapperLogin>
                        <I.Title>Já tem uma conta?</I.Title>
                        <TouchableOpacity>
                            <I.UnderlinedTitle>Faça Login</I.UnderlinedTitle>
                        </TouchableOpacity>
                    </I.WrapperLogin>
                </I.WrapperFoot>
            </I.Content>
        </ImageBackground>
    )
}