import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller('commits')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllCommits() {
    const url =
      'https://api.github.com/repos/joseluismunozzuta/githubCommitsViewer/commits';
    const response = await axios.get(url, {
      headers: {
        Authorization:
          'token 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',
      },
    });
    const commits = response.data;
    return commits;
  }
}
