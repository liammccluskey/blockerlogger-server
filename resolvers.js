const DATA = {
    projects: [
        {
            id: '0',
            name: 'Ergsync',
            link: 'https://ergsync.com'
        },
        {
            id: '1',
            name: 'Reduced React',
            link: 'https://reducedreact.com'
        }
    ]
}

const resolvers = {
    Query: {
        welcome: (parent, args, context, info) => {
            return 'Hello World'
        },
        projects: () => {
            return DATA.projects
        },
        project: (parent, {id}) => {
            const ret = DATA.projects.find( p => p.id === id )
            console.log({ret, DATA, id})
            return ret
        }
    }
}

export {resolvers}