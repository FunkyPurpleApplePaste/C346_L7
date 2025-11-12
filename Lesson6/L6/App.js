import React, {useState} from 'react';
import {Image, View, ScrollView, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Question = ({ question, image, options, onChange }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{question}</Text>
            <Image
                source={{ uri: image }}
                style={{ width: 370, height: 300, borderRadius: 30, marginBottom: 10 }}
            />
            <Picker
                selectedValue={onChange.selected}
                onValueChange={(value) => onChange.setSelected(value)}
                style={{ borderWidth: 2 }}
            >
                <Picker.Item label="Choose an answer..." value="" />
                {options.map((option, index) => (
                    <Picker.Item style={{ fontSize: 20, fontWeight: 'bold'}} key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

const QuizApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');


    const checkAnswers = () => {
        let score = 0;

        if (answer1 === 'LeBron') score++;
        if (answer2 === 'Kanye') score++;
        if (answer3 === 'Glover') score++;
        if (answer4 === 'Freeman') score++;

        let message = `You got ${score} out of 4 correct!`;

        if (score === 4) {
            message += '\nYay! You did it!';
        } else if (score === 3) {
            message += '\nThats decent!';
        } else if (score === 3) {
            message += '\nThats okay';
        } else {
            message += '\nNot good.';
        }

        Alert.alert('Quiz Results', message);
    };

    return (
        <ScrollView style={{ marginTop: 40, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
                <FontAwesome6 name="crown" size={24} /> Celebrity Quiz <FontAwesome6 name="crown" size={24} />
            </Text>

            <Question
                question="1. Who is this?"
                image="https://assets.newsweek.com/wp-content/uploads/2025/10/GettyImages-2213770284.jpg?w=1600&quality=75&webp=1"
                options={['LeBron', 'Shaq', 'Jackson']}
                onChange={{ selected: answer1, setSelected: setAnswer1 }}
            />

            <Question
                question="2. Who is this?"
                image="https://resizing.flixster.com/IRHVTsmoOjbf5X1frOlLQkt-gkI=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/489020_v9_bc.jpg"
                options={['Ross', 'Kanye', 'Freeman']}
                onChange={{ selected: answer2, setSelected: setAnswer2 }}
            />

            <Question
                question="3. Who is this?"
                image="https://cdn.britannica.com/08/215008-050-70F9BA32/American-actor-Donald-Glover-2019.jpg"
                options={['David', 'Glover', 'Percy']}
                onChange={{ selected: answer3, setSelected: setAnswer3 }}
            />

            <Question
                question="4. Who is this?"
                image="https://futureoflife.org/wp-content/uploads/2020/08/Morgan-Freeman-net-worth-1-e1597654595477.jpg"
                options={['George', 'Alex', 'Freeman']}
                onChange={{ selected: answer4, setSelected: setAnswer4 }}
            />

            <View style={{ marginBottom: 40 }}>
                <Button title="Submit Answers" onPress={checkAnswers} />
            </View>
        </ScrollView>
    );
};

export default QuizApp;
