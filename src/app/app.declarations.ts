// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/components/header/header.component';
import { LogoComponent } from './commons/components/logo/logo.component';
import { UserComponent } from './commons/components/header/user/user.component';
import { BreadcrumpsComponent } from './commons/components/breadcrumps/breadcrumps.component';
import { CoursesPageComponent } from './pages/courses-page/components/courses-page.component';
import { CourseItemComponent } from './pages/courses-page/components/course-item/course-item.component';
import { SearchBarComponent } from './pages/courses-page/components/search-bar/search-bar.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { CopyRightsComponent } from './commons/components/footer/copy-rights/copy-rights.component';

// PIPES
import { DurationPipe } from './pages/courses-page/pipes/duration/duration.pipe';
import { OrderByPipe } from './pages/courses-page/pipes/order-by/order-by.pipe';
import { FilterPipe } from './pages/courses-page/pipes/filter/filter.pipe';

export const APP_DECLARATIONS = [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    UserComponent,
    BreadcrumpsComponent,
    CoursesPageComponent,
    CourseItemComponent,
    SearchBarComponent,
    FooterComponent,
    CopyRightsComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
];
