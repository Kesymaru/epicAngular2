import {bootstrap}    from 'angular2/platform/browser';

import {ChatComponent} from './chat/index';
import {ChatService} from './chat/index';

bootstrap(ChatComponent, [ChatService]);