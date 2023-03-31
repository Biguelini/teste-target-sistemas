public class DistributorPercentage {
    public static void main(String[] args) {
        double sp = 67836.43;
        double rj = 36678.66;
        double mg = 29229.88;
        double es = 27165.48;
        double outros = 19849.53;
        
        double total = sp + rj + mg + es + outros;
        
        double spPercentage = sp / total * 100;
        double rjPercentage = rj / total * 100;
        double mgPercentage = mg / total * 100;
        double esPercentage = es / total * 100;
        double outrosPercentage = outros / total * 100;
        
        System.out.println("Pogentagem de vendas por estado:");
        System.out.printf("SP: %.2f%%\n", spPercentage);
        System.out.printf("RJ: %.2f%%\n", rjPercentage);
        System.out.printf("MG: %.2f%%\n", mgPercentage);
        System.out.printf("ES: %.2f%%\n", esPercentage);
        System.out.printf("Outros: %.2f%%\n", outrosPercentage);
    }
}