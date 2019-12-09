import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Greet from './components/Greet'
import Navbar from './components/Navbar';
import Count from './components/Count';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetingComponent from './components/UserGreetingComponent';
import Person from './components/Person';
import NameList from './components/NameList';
import Stylecss from './components/Stylecss';
import Inline from './components/Inline';
import { FormHandlingComponent } from './components/FormHandlingComponent';
import LifeCycle from './components/LifeCycle';
import FragmentComponent from './components/FragmentComponent';
import Table from './components/Table';
import PureComponents from './components/PureComponents';
import { RefsDemo } from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import { FRParentInput } from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero ';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ClickCounterTwo } from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import { Users } from './components/Users';
import CounterDemo from './components/CounterDemo';
import { UserProvider } from './components/UserContext';
import { ComponentC } from './components/ComponentC';
import PostListComponent from './components/PostListComponent';
//import Table from '@material-ui/core/Table/Table';
class App extends Component {

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Navbar name="technologies" />
          </Toolbar>
        </AppBar>
        {/* <Greet name="kumar">
<p> this my name</p>
</Greet>
<Count/>
<h1>--------EVENT BIND------------</h1>
<EventBind/>
<ParentComponent/> 
<UserGreetingComponent/>
<NameList/>

<Stylecss primary={true}/>

<Inline/>

<FormHandlingComponent/>
<LifeCycle/>
<FragmentComponent/>
<Table/>
<PureComponents/>
<RefsDemo/>
<FocusInput/>
<FRParentInput/>
<PortalDemo/>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
          <Users name={(isLogined)=>isLogined?'Lakhan Singh':'not login'}/>
        
        <ClickCounterTwo/>
        <HoverCounterTwo/>
        <Users render={(isLogined)=>isLogined?'Lakhan Singh':'not login'}/>
     
     <CounterDemo render={(count,incrementCount)=>(
     <ClickCounterTwo count={count} incrementCount={incrementCount} />
     )}/>
     <CounterDemo render={(count,incrementCount)=>(
     <HoverCounterTwo count={count} incrementCount={incrementCount} />
     )}/>
   
<UserProvider value="Lakhan Singh">
 

  <ComponentC/>
</UserProvider>
 */}

<PostListComponent/>
        </div>
    );
  }
}
export default App;
