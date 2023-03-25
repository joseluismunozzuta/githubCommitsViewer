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
      const response = await axios.get(url);
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
      return commitbySha;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  @Get('other')
  async getAnotherRepoCommits(
    @Query('owner') owner: string,
    @Query('reponame') reponame: string,
  ) {
    try {
      const url = `https://api.github.com/repos/${owner}/${reponame}/commits`;
      const response = await axios.get(url);
      const commitbySha = response.data;
      return commitbySha;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
