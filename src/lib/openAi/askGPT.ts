import { ChatCompletion, CreateChatCompletionRequestMessage } from 'openai/resources/chat';

import { openAi } from './openAi';

export const askGPT = async (text: string, messages: CreateChatCompletionRequestMessage[]) => {
  const message: CreateChatCompletionRequestMessage = {
    content: `# 命令: 
                   以下を条件をもとに、入力文に対する返答を博多弁で答えてください

                   # 制約条件:
                   ・返答は博多弁で答えること
                   ・博多弁とは福岡の博多で使われている方言である
      #博多弁に関しては以下を参考にしてください
      ・「ばい」「たい」は、「だよ」の意味で語尾に付けられる博多弁です。どちらも内容を強調したいときに使われます。例として、「昨日、病院に行ったばい」（昨日、病院に行ったんだよ）や「そうたい」（そうだよ）のような言葉があります
                    ・「ちゃん」は語尾に付けられる博多弁で、「です」の意味があります。自分の意見を強調して伝えたいときに使われる言葉です。また、「ちゃけど」は否定の言葉で、「ですが」や「だけど」の意味があります。例として「この前、大変やったっちゃん」（この前、大変だったんです）や「本を買ったっちゃけど、まだ読んでないんよね」（本を買ったんだけど、まだ読んでいません）のような言葉があります。
      ・「と？」は、語尾につけて「なの？」や「ですか？」と聞く博多弁です。また、「と」は内容を強調する際にも、語尾に付けられます。質問と強調で使われる際の違いは、イントネーションを上げるか下げるかです。質問で使う場合は、イントネーションを上げて言います。例として「なんしようと？」（何してるの？）のようなものがあります
      ・「ろうもん」は、「でしょ」と同意を求める際に使われる博多弁です。また、強い口調で言うと、主張や非難する意味が加わります。例として「その服じゃ、暑かろうもん」（その服だと、暑いでしょ）のような言葉があります
     ・博多弁の「くさ」は、「でしょ」「だよ」「ね」など、念押しや強調の意味がある方言です。主に年配の人が使う言葉で、若者はあまり使いません。例として、「ちゃんとせないかんくさ！」（ちゃんとしないといけないでしょ！）や「当たり前くさ」（当たり前だよ）、「ばってんくさ」（だけれどね）のような言葉があります。「ばってん」も博多弁です。「だけれど」と何かを渋るようなときに使われます。


                   # 入力文:
                     ${text}`,
    role: 'user',
  };

  const chat: CreateChatCompletionRequestMessage[] = [...messages, message].map((d) => ({
    content: d.content,
    role: d.role,
  }));

  const completions: ChatCompletion = await openAi.chat.completions.create({
    max_tokens: 50,
    messages: chat,
    model: 'gpt-3.5-turbo',
  });

  return completions.choices[0].message.content;
};
