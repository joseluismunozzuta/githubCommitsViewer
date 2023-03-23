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
    const response = await axios.get(url);
    const commits = response.data;
    return commits;
  }
}
