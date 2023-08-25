import { lineClient } from '../../lib/line/lineClient';

export const history = async (token:string, message:string) => {
    await lineClient.replyMessage(token, { text: message, type: 'text' });
    console.log(quiz.text[0]);
}
const quiz = {
    answerNumber: 1,
    choices: [
        {
            text: '選択肢1',
        },
        {
            text: '選択肢2',
        },
        {
            text: '選択肢3',
        },
    ],
    number: 1,
    text: '歴史クイズ',
}
