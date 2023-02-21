import { CoreModule } from '@core/core.module';
import { Module } from '@rxdi/core';
import { CreditCardComponent } from '@rxdi/credit-card-form';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { ButtonComponent } from '@rxdi/ui-kit/button';
import { SpriteComponent } from '@shared/sprite';

import { WidgetComponent } from './widget';

@Module({
  imports: [CoreModule, ReactiveUiModule.forRoot()],
  components: [SpriteComponent, CreditCardComponent, ButtonComponent],
  bootstrap: [WidgetComponent],
})
export class AppModule {}
