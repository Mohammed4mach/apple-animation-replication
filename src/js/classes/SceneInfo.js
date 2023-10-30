/**
 * Info. helps in scenes setup
 *
 * */
class SceneInfo
{
    /** @property The start scroll offset when scene starts (px) */
    start;

    /** @property The duration in which the scene exists (px) */
    duration;

    /** @property The end scroll offset when scene finishes */
    end;

    /**
     * Info. helps in scenes setup
     *
     * @param start The start scroll offset when scene starts (px)
     * @param duration The duration the scene exists (px)
     * */
    constructor(start, duration)
    {
        this.start    = start;
        this.duration = duration;

        this.end = start + duration;
    }
}

export default SceneInfo;

