// app.service.ts
import { Injectable } from '@nestjs/common';
import { pipeline } from '@xenova/transformers';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    try {
      // const { pipeline } = await import('@xenova/transformers');

      const model = 'toloka/t5-large-for-text-aggregation';
      const pipe = await pipeline('summarization', model);

      const out = await pipe(
        'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.',
      );

      return out;
    } catch (error) {
      console.error('Error importing @xenova/transformers:', error);
      return 'An error occurred.';
    }
  }
}
