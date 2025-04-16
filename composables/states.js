export function useTheme() {
    return useState('theme', ()=> 'light')
}
export function useThemes() {
    let themes = ref(['light', 'dark'])
    return themes
}

export function useLang(){
    return useState('lang', ()=> 'en')
}

export function useLanguages(){
    let languages = ref(['ru', 'fr', 'en', 'es']);
    return languages
}

export function useGb(){
    return useState('gb', ()=> '128GB')
}

export function useGbs(){
    let languages = ref(['128GB', '256GB', '512GB', '1TB']);
    return languages
}