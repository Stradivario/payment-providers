import { Module } from '@rxdi/core';

import { ApiService } from './api/api.service';

@Module({
  providers: [ApiService],
})
export class CoreModule {}
