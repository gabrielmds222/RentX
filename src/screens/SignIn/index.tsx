import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  StatusBar, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert, 
} from 'react-native';

import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Form,
    Footer,
} from './styles';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation= useNavigation();

  async function handleSignIn(){
    try {
        const schema = Yup.object().shape({
            email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
            password: Yup.string().required('Senha é obrigatório')
        });

        await schema.validate({ email, password });
        Alert.alert('tudo certo');

    } catch (error) {
        if(error instanceof Yup.ValidationError) {
            return Alert.alert('Opa', error.message);
        } else {
            Alert.alert('Erro na autenticação', 
                        'Ocorreu um erro ao fazer login, verifique as credenciais')
        }
    }
}

function handleNewAccount() {
  navigation.navigate('SignUpFirstStep');
}

  return(
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
            <Header>
              <Title>
                Estamos{'\n'}quase lá 
              </Title>
              <SubTitle>
                Faça seu login para começar{'\n'}
                uma exmepriência incrível.
              </SubTitle>
            </Header>

            <Form>
              <Input 
                iconName="mail"
                placeholder="Email"
                keyboardType='email-address'
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />
              <PasswordInput 
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </Form>

            <Footer>
              <Button 
                  title="Login"
                  onPress={handleSignIn}
                  enabled
                  loading={false}
              />
              <Button 
                  title="Criar conta gratuita"
                  color={theme.colors.background_secondary}
                  light
                  onPress={handleNewAccount}
                  enabled={true}
                  loading={false}
              />
            </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}