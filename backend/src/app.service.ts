import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllCommits(): string {
    return this.getAllCommits();
  }
  getCommitBySHA(): string {
    return this.getCommitBySHA();
  }
  getCommitterInfo(): string {
    return this.getCommitterInfo();
  }
}
