import React from 'react'
import Wave from '../assets/wave.svg'

const Skills = () => {
  return (
    <div name='skills' className='w-full font-mono text-[#5e5e5e]'>
        {/* wave */}
        <div className='w-full mt-16 mb-8'> 
            <img src={Wave} className='w-full'></img>
        </div>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-content w-full h-full'>

            <div className='my-4 py-4'>
                <p className='text-4xl font-bold inline border-b-4'>Skills</p>
            </div>
                <p className='mb-2'>These are the technologies I work with every day.</p>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 px-4'>
                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill='#5e5e5e'/></svg>
                    </div>                   
                    <p>HTML</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>CSS</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>JAVASCRIPT</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>PYTHON</p>
                </div>
{/* 
                <div>
                    <div className='w-20 mx-auto hover:scale-110 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flask</title><path d="M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>FLASK</p>
                </div>

                <div>
                    <div className='w-20 mx-auto hover:scale-110 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill='#5e5e5e'/></svg>
                    </div>
                    <p>GIT</p>
                </div> */}

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>MONGODB</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>NODE.JS</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>EXPRESS</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bootstrap</title><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>BOOTSTRAP</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>TAILWIND</p>
                </div>

                <div>
                    <div className='w-10 mx-auto hover:scale-125 duration-500 my-1'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill='#5e5e5e'/></svg>
                    </div>
                    <p>FIGMA</p>
                </div>
            </div>

        </div>
       
        {/* wave */}
        <div className='w-full my-8'> 
            <img src={Wave} className='w-full'></img>
        </div> 
    </div>
  )
}

export default Skills