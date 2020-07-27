import axios from 'axios';

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

/*
 TODO
 existe uma forma mais simples, ver de maneira a simplificar esta funcao.
    --  1
*/
const umPorSegundo = async() => {
    await delay().then(() => {
        console.log("1s")
    });
    await delay().then(() => {
        console.log("2s")
    });
    await delay().then(() => {
        console.log("3s")
    });
}

umPorSegundo();

// 2a
// maybe further improvment?
const getUserFromGithub = async user => {
    await axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
//

class Github {
    static async getRepositories(repo) {
        await axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
Github.getRepositories('rocketseat/unform');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => {
    await axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
buscaUsuario('diego3g');