import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Hebert";
cliente1.cpf = 8999866666;
const contaCorrenteCliente1 = new ContaCorrente;
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1._saldo = 100;
contaCorrenteCliente1.cliente = cliente1;
contaCorrenteCliente1.depositar(500);





const cliente2 = new Cliente();
cliente2.nome = "Maya";
cliente2.cpf = 6666666666;
const contaCorrenteCliente2 = new ContaCorrente;
contaCorrenteCliente2.agencia = 102;
contaCorrenteCliente2.cliente = cliente2;
contaCorrenteCliente2._saldo = 500;
contaCorrenteCliente2.depositar(200);

contaCorrenteCliente1.transferir(200, contaCorrenteCliente2);









console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);

