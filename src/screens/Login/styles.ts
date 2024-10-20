import styled from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient"

export const LinearGradientView = styled(LinearGradient)`
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    margin-right: 15px;
`;

export const Title = styled.Text`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;

export const UnderlinedTitle = styled.Text`
    color: #F65D09;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    margin-left: 10px;
`;

export const SocialButtonLogin = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: center;
`;

export const WrapperLogin = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    justify-content: flex-end;
    flex: 1;
    margin-bottom: 53px;
`;

export const TextRegister = styled.Text`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: white;
`;

export const WrapperButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 130px;
    margin-bottom: 30px;
`;

export const WrapperFoot = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;