# roll20-ts
Typescript definitions for the Roll20 API

### Using the state variable
The state variable has been set up in such a way that you can extend
it's definition to help provide you with type completion. This is thanks
to the fact that TypeScript merges duplicate interface definitions as
long as they are in the same namespace.

As such, all you need to do is add the following to your script
```typescript
interface State {
    ScriptName: YourObjectDefinition
}
```

The object definition could be inline or it's own interface. You can see
an example of an inline definition below

##### Inline
```typescript
interface State {
    ScriptName: {
        property1: number,
        property2: string
    }
}
```

### Examples
Examples of using these typings can be found in the following repos:
* [kihira/Roll20Scripts](https://github.com/kihira/Roll20Scripts)