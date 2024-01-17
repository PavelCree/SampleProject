import { AxiosController } from '../yandexApi';

const apiKey =
  't1.9euelZqZi57OxsbJzcrMzpubyouKxu3rnpWaj5zGjZuRnJ6Kks-Jl5TJx4zl9PcuVV5S-e9Xfk3U3fT3bgNcUvnvV35N1M3n9euelZqOmp3JkM2Vz5yOjs3JmsbGkO_8xeuelZqOmp3JkM2Vz5yOjs3JmsbGkA.N5Hp8p0RQacPVj2WZ_Gs3DwS1lSUw-IPVnC4kjqiTQoha-G84cdgEnUUtwFNgytllGT8lzcETVZ1N7ZpzF8YCQ';
const folderId = 'b1g6cn40ar2pcb0kg5oo';

// eslint-disable-next-line import/prefer-default-export
export const postMessage = async (message: string) => {
  try {
    const answer = await AxiosController.post(
      '/api/foundationModels/v1/completion',
      {
        modelUri: `gpt://${folderId}/yandexgpt-lite`,
        completionOptions: {
          stream: false,
          temperature: 0.6,
          maxTokens: '2000',
        },
        messages: [
          {
            role: 'user',
            text: message,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'x-folder-id': folderId,
        },
      },
    );

    return answer.data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
