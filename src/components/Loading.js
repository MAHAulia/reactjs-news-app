import '../App.css';

function Loading () {
    return (
        <div className="Loading">
            <div className="flex w-screen justify-center">
                <div className="animate-bounce">
                    <svg class="animate-spin w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span className="mt-2 text-lg">Sedang memuat</span>
                <span className="animate-bounce mt-2">&nbsp;.&nbsp;</span>
                <span className="animate-bounce mt-2">&nbsp;.&nbsp;</span>
                <span className="animate-bounce mt-2">&nbsp;.&nbsp;</span>
            </div>
        </div>
    )
}

export default Loading;