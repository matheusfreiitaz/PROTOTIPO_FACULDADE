package introdução;

public class CaixaEletronica {
    public static void main (String[]argus){
        double saldo = 27.0;
        double valorSolicitado= 10.0;

        if(valorSolicitado < saldo ){
            saldo = saldo - valorSolicitado;
        System.out.println("Transferência Realizada !");
    }else { 
        System.out.println("Sem Saldo !");
        }
    }

}
