import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Hebert", 8999868621);
const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);

contaCorrenteCliente1._saldo = 100;
contaCorrenteCliente1.depositar(500);

const cliente2 = new Cliente("Maya", 77777777777);
const contaCorrenteCliente2 = new ContaCorrente(1002, cliente2);

contaCorrenteCliente2._saldo = 500;
contaCorrenteCliente2.depositar(200);


contaCorrenteCliente1.transferir(200, contaCorrenteCliente2);
console.log(ContaCorrente.numeroDeContas);









console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);

