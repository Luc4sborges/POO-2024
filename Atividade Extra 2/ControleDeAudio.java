public class ControleDeAudio {
    private int volume = 2;

    public void aumentarVolume() {
        if (volume < 10) {
            volume++;
        }
    }

    public void diminuirVolume() {
        if (volume > 0) {
            volume--;
        }
    }

    public int lerVolume() {
        return volume;
    }

    public static void main(String[] args) {
        ControleDeAudio controle = new ControleDeAudio();
        controle.aumentarVolume();
        System.out.println(controle.lerVolume());
        controle.diminuirVolume();
        System.out.println(controle.lerVolume());
    }
