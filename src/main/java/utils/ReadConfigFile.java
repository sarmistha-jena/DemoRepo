package utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadConfigFile {
    public InputStream input;
    public static Properties prop = null;

    public ReadConfigFile() {
        try {
            input = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\properties\\config.properties");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        try {
            prop = new Properties();
            prop.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getPropertyFromConfig(String term) throws IOException {
        Properties p = new Properties();
        FileInputStream fi = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\properties\\config.properties");
        p.load(fi);
        return p.getProperty(term.toLowerCase());
    }

    public String getUrl() {
        if (prop.getProperty("url") == null)
            return "";
        return prop.getProperty("url");
    }

    public static String getConfigProperty(String propName) {
        if (prop.getProperty(propName) == null)
            return "";
        return prop.getProperty(propName);
    }
}
