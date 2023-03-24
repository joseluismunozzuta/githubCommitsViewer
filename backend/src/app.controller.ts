import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller('commits')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllCommits() {
    try {
      const url =
        'https://api.github.com/repos/joseluismunozzuta/githubCommitsViewer/commits';
      const token = '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';
      const response = await axios.get(url, {
        headers: { Authorization: `${token}` },
      });
      const commits = response.data;
      return commits;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  @Get('committer')
  async getCommitterInfo() {
    try {
      const url =
        'https://api.github.com/repos/joseluismunozzuta/githubCommitsViewer/commits';
      const response = await axios.get(url);
      const commits = response.data;
      return commits;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  @Get('sha')
  async getCommitBySHA(@Query('sha') sha: string) {
    try {
      const url = `https://api.github.com/repos/joseluismunozzuta/githubCommitsViewer/commits/${sha}`;
      const response = await axios.get(url);
      const commitbySha = response.data;
      console.log(sha);
      return commitbySha;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
