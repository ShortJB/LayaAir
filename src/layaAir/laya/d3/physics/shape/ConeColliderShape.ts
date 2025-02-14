import { ColliderShape } from "./ColliderShape";
import { ILaya3D } from "../../../../ILaya3D";
import { LayaEnv } from "../../../../LayaEnv";

/**
 * <code>ConeColliderShape</code> 类用于创建圆锥碰撞器。
 */
export class ConeColliderShape extends ColliderShape {
	private _orientation: number;
	private _radius: number = 1;
	private _height: number = 0.5;

	/**
	 * 半径。
	 */
	get radius(): number {
		return this._radius;
	}

	set radius(value: number) {
		this._radius = value;
		if (LayaEnv.isPlaying) this.changeConeShape();
	}

	/**
	 * 高度。
	 */
	get height(): number {
		return this._height;
	}

	set height(value: number) {
		this._height = value;
		if (LayaEnv.isPlaying) this.changeConeShape();
	}

	/**
	 * 方向。
	 */
	get orientation(): number {
		return this._orientation;
	}

	set orientation(value: number) {
		this._orientation = value;
		if (LayaEnv.isPlaying) this.changeConeShape();
	}

	/**
	 * 创建一个新的 <code>ConeColliderShape</code> 实例。
	 * @param height 高。
	 * @param radius 半径。
	 */
	constructor(radius: number = 0.5, height: number = 1.0, orientation: number = ColliderShape.SHAPEORIENTATION_UPY) {
		super();
		this._radius = radius;
		this._height = height;
		this._orientation = orientation;
		this._type = ColliderShape.SHAPETYPES_CYLINDER;
		var bt: any = ILaya3D.Physics3D._bullet;
		switch (orientation) {
			case ColliderShape.SHAPEORIENTATION_UPX:
				this._btShape = bt.btConeShapeX_create(radius, height);
				break;
			case ColliderShape.SHAPEORIENTATION_UPY:
				this._btShape = bt.btConeShape_create(radius, height);
				break;
			case ColliderShape.SHAPEORIENTATION_UPZ:
				this._btShape = bt.btConeShapeZ_create(radius, height);
				break;
			default:
				throw "ConeColliderShape:unknown orientation.";
		}
	}

	/**
	 * @internal
	 */
	changeConeShape() {
		var bt: any = ILaya3D.Physics3D._bullet;
		if (this._btShape) {
			bt.btCollisionShape_destroy(this._btShape);
		}

		switch (this._orientation) {
			case ColliderShape.SHAPEORIENTATION_UPX:
				this._btShape = bt.btConeShapeX_create(this._radius, this._height);
				break;
			case ColliderShape.SHAPEORIENTATION_UPY:
				this._btShape = bt.btConeShape_create(this._radius, this._height);
				break;
			case ColliderShape.SHAPEORIENTATION_UPZ:
				this._btShape = bt.btConeShapeZ_create(this._radius, this._height);
				break;
			default:
				throw "ConeColliderShape:unknown orientation.";
		}
	}

	/**
	 * 克隆
	 * @inheritDoc
	 * @override
	 * @returns 克隆的ConeColliderShape实例
	 */
	clone(): any {
		var dest: ConeColliderShape = new ConeColliderShape(this._radius, this._height, this._orientation);
		this.cloneTo(dest);
		return dest;
	}

}


